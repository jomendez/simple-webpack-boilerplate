const path = require('path');
const config = require('./site.config');
const FtpDeploy = require('ftp-deploy');

const chalk = require('chalk');
const clear = require('clear');

const { prompt } = require('enquirer');

const deployConfig = {
  user: config.ftp_user,
  password: '',
  host: config.ftp_host,
  port: config.ftp_port || '21',

  // Local folder to upload
  localRoot: path.join(config.root, config.paths.dist),

  // Remote FTP folder to upload to
  remoteRoot: `/${config.ftp_remote}/`,

  // Define what files to include in the upload (by default, upload everything in dist/ folder)
  include: ['**/*'],

  // Remove files in FTP folder before uploading
  deleteRemote: true,

  // FTP Mode
  forcePasv: true,
}

// We shouldn't store the password in the source code, so we askk for it here
async function runSetup() {
  clear();
  console.log(chalk.yellow('If you havent configured your FTP, you can do it by running: npm run setup'));

  const questions = await prompt([
    {
      type: 'password',
      name: 'ftp_password',
      message: 'Enter FTP password'
    }
  ]);
  if (typeof questions.ftp_password !== 'undefined') {
    deployConfig.password = questions.ftp_password;

    // Start the deployment
    const ftpDeploy = new FtpDeploy();
    ftpDeploy.deploy(deployConfig).then(() => {
      console.log(chalk.green('Deployed successfuly'));
    })
    .catch((err)=>{
      console.log(chalk.red('Error '), err);
    });

  } else {
    console.log(chalk.yellow('You need to enter a password'));
  }
}

runSetup()