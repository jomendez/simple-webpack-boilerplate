// CSS
require('./css/main.css');

//scss
import './scss/main.scss';

// JavaScript
require('./js/app.js');
require('@babel/polyfill');


// google analytics
const config = require('./../config/site.config.js');
if (!!config.googleAnalyticsUA) {
  const CODE = `<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','{{ID}}','auto');ga('send','pageview');</script>`;
  document.querySelector('head').innerHTML = document.querySelector('head').innerHTML + `${CODE.replace('{{ID}}', config.googleAnalyticsUA)}`;
}