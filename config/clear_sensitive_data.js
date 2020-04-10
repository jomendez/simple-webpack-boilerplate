
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const jqueryIncludeCode = require('./jquery_code');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}


clear();

fs.readFile('./config/site.config.js', 'utf8', (err, data) => {
  if (err) {
    console.log(chalk.red('Error reading data '), err);
    return;
  }
  data = data.replace(/googleAnalyticsUA: '.*?'/g, `googleAnalyticsUA: ''`);
  data = data.replace(/site_url: '.*?'/g, `site_url: ''`);
  data = data.replace(/site_port: '.*?'/g, `site_port: ''`);
  data = data.replace(/ftp_port: '.*?'/g, `ftp_port: ''`);
  data = data.replace(/ftp_remote: '.*?'/g, `ftp_remote: ''`);
  data = data.replace(/ftp_user: '.*?'/g, `ftp_user: ''`);
  data = data.replace(/ftp_host: '.*?'/g, `ftp_host: ''`);

  //save changes
  fs.writeFile(path.join(ROOT, '/config/site.config.js'), data, 'utf8', (err) => { });
});

fs.readFile('./src/main.js', 'utf8', (err, data) => {
  if (data.includes(jqueryIncludeCode)) {
    data = data.replace(jqueryIncludeCode, '');
    fs.writeFile(path.join(ROOT, '/src/main.js'), data, (err) => { });
  }
});

console.log(chalk.green('Sensitive data cleared'));
