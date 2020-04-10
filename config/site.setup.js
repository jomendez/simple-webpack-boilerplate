/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const jqueryIncludeCode = require('./jquery_code');

const { prompt } = require('enquirer');

const skip_setup = process.env.SKIP_SETUP || false;

let ROOT = process.env.PWD;


if (!ROOT) {
  ROOT = process.cwd();
}

async function runSetUpFtp() {
  console.log('\n\n');
  console.log(chalk.red('Be carefull, do not commit sensitive data to public repos'));
  console.log('');

  const questionsFtp = await prompt([
    {
      type: 'input',
      name: 'ftp_host',
      message: 'Enter the FTP host',
      hint: 'localhost'
    },
    {
      type: 'input',
      name: 'ftp_port',
      message: 'Enter the port',
      hint: 'default 21'
    },
    {
      type: 'input',
      name: 'ftp_user',
      message: 'Enter the user'
    },
    {
      type: 'input',
      name: 'ftp_remote',
      message: 'Enter folder name'
    }
  ]);

  fs.readFile('./config/site.config.js', 'utf8', (err, data) => {
    
    
    if (!!questionsFtp.ftp_remote && questionsFtp.ftp_remote !== '') {
      data = data.replace(/ftp_remote: '.*?'/g, `ftp_remote: '${questionsFtp.ftp_remote}'`);
    }else{
      data = data.replace(/ftp_remote: '.*?'/g, `ftp_remote: 'public_html'`);
    }

    if (typeof questionsFtp.ftp_host !== 'undefined') {
      data = data.replace(/ftp_host: '.*?'/g, `ftp_host: '${questionsFtp.ftp_host}'`);
    }

    if (typeof questionsFtp.ftp_user !== 'undefined') {
      data = data.replace(/ftp_user: '.*?'/g, `ftp_user: '${questionsFtp.ftp_user}'`);
    }

    if (!!questionsFtp.ftp_port) {
      data = data.replace(/ftp_port: '.*?'/g, `ftp_port: '${questionsFtp.ftp_port}'`);
    }else{
      data = data.replace(/ftp_port: '.*?'/g, `ftp_port: '21'`);
    }

  

    fs.writeFile(path.join(ROOT, '/config/site.config.js'), data, 'utf8', (err) => { });
  });
}

async function runSetup() {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync('Simple-webpack-boilerplate', { horizontalLayout: 'fitted' })
    )
  );

  const questions = await prompt([
    {
      type: 'input',
      name: 'site_url',
      message: 'What is the live URL for your website?',
      hint: 'localhost'
    },
    {
      type: 'input',
      name: 'site_port',
      message: 'Enter the port',
      hint: '9000 default'
    },
    {
      type: 'input',
      name: 'google_analytics',
      message: 'What is your Google Analytics Tracking ID?',
      hint: 'UA-XXXXX-Y'
    },
    {
      type: 'select',
      name: 'jquery',
      message: 'Would you like jQuery installed?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'select',
      name: 'ftp',
      message: 'Would you like to setup FTP?',
      choices: ['Yes', 'No'],
    }

  ]);

  // Update site configuration
  fs.readFile('./config/site.config.js', 'utf8', (err, data) => {

    if (typeof questions.google_analytics !== 'undefined') {
      data = data.replace(/googleAnalyticsUA: '.*?'/g, `googleAnalyticsUA: '${questions.google_analytics}'`);
    }

    if (typeof questions.site_url !== 'undefined') {
      data = data.replace(/site_url: '.*?'/g, `site_url: '${questions.site_url}'`);
    }

    if (typeof questions.site_port !== 'undefined') {
      data = data.replace(/site_port: '.*?'/g, `site_port: '${questions.site_port}'`);
    }

    fs.writeFile(path.join(ROOT, '/config/site.config.js'), data, 'utf8', (err) => { });
  });


  // Add jQuery to scripts
  if (questions.jquery == 'Yes') {
   
    fs.readFile('./src/main.js', 'utf8', (err, data) => {
      if (!data.includes(jqueryIncludeCode)) {
        data = jqueryIncludeCode + data;
        fs.writeFile(path.join(ROOT, '/src/main.js'), data, (err) => { });
      }
    });
  }

  // Add ftp configuration
  if (questions.ftp == 'Yes') {
    runSetUpFtp();
  }

};

if (!skip_setup) {
  runSetup();
}
