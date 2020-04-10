const path = require('path');
const config = require('./site.config');
const FtpDeploy = require('ftp-deploy');

const deployConfig = {
   // FTP username
   user: config.ftp_user,

   // FTP Password
   password: config.ftp_password,
 
   // FTP Host
   host: config.ftp_host,
 
   // FTP Port
   port: config.ftp_port,
 
   // Local folder to upload
   localRoot: path.join(config.root, config.paths.dist),
 
   // Remote FTP folder to upload to
   remoteRoot: config.ftp_remoteRoot || '/public_html/',
 
   // Define what files to include in the upload (by default, upload everything in dist/ folder)
   include: ['**/*'],
 
   // Remove files in FTP folder before uploading
   deleteRemote: true,
 
   // FTP Mode
   forcePasv: true,
}

const ftpDeploy = new FtpDeploy();

ftpDeploy.deploy(deployConfig);