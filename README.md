[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/jomendez/simple-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/jomendez/simple-webpack-boilerplate)  [![dependencies Status](https://david-dm.org/jomendez/simple-webpack-boilerplate/status.svg)](https://david-dm.org/jomendez/simple-webpack-boilerplate)

# Bundle a simple web app with Webpack

<p align="center">
  <img src="https://user-images.githubusercontent.com/8228498/78913687-60067200-7a57-11ea-80de-66a3feea8c74.png">
</p>

A simple skeleton project to rapid prototyping and development of front-end apps, with scss (optional), pug(optional), ES7, webpack (bundlefy, uglyfy,etc).

## Requirements

* [Node.js](http://nodejs.org/) (developed with node 12)

## Installation Steps (if applicable)

### Clone repo:
```
git clone https://github.com/jomendez/simple-webpack-boilerplate && cd simple-webpack-boilerplate && 
rm -rf .git && git init
````

1. Run `npm install` 
2. Run `npm run setup` to configure the app (include JQuery, etc)

In this step you'll be able to setup your google analytics, enable jquery, setup (optional) an FTP for deployments.

![image](https://user-images.githubusercontent.com/8228498/79028644-e659ab80-7b5e-11ea-9367-e0918bdefdd3.png)

3. Run `npm run dev` to open a browser and lunch a local web server with live-reload 
4. Run `npm run build` build for production (./dist folder) 
5. Run `npm run deploy` to deploy your code to your FTP.

## If everything went well (`npm run dev`)...

You browser should open a new tab and you should see something like this:

![image](https://user-images.githubusercontent.com/8228498/79012634-bdbcbc00-7b34-11ea-9fd4-265a0eede4e2.png)
