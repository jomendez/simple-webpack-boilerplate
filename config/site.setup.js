/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const { prompt } = require('enquirer');

const skip_setup = process.env.SKIP_SETUP || false;

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

async function runSetup() {
  clear();
  console.log(
    chalk.blue(
      figlet.textSync('Webpack boilerplate', { horizontalLayout: 'fitted' })
    )
  );

  const questions = await prompt([
    ,
    {
      type: 'input',
      name: 'site_url',
      message: 'What is the live URL for your website?',
      hint: 'localhost'
    },
    ,
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
    const jsContent =
      '// Load jQuery from NPM\n'
      + 'import $ from \'jquery\';\n\n'
      + 'window.jQuery = $;\n'
      + 'window.$ = $;\n\n';
    fs.readFile('./src/main.js', 'utf8', (err, data) => {
      if (!data.includes(jsContent)) {
        data = jsContent + data;
        fs.writeFile(path.join(ROOT, '/src/main.js'), data, (err) => { });
      }
    });
  }
};

if (!skip_setup) {
  runSetup();
}

