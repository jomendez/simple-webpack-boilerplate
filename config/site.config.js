const path = require('path');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  site_url: '',
  site_port: '',

  // Google Analytics tracking ID (leave blank to disable)
  googleAnalyticsUA: '',

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/img/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: process.env.PORT || 9000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },

  // FTP setup
 
   // FTP Port
   ftp_port: '',
 
   // Remote FTP folder to upload to
   ftp_remote: '',

   // FTP username
   ftp_user: '',
 
   // FTP Host
   ftp_host: ''
};

module.exports = config;