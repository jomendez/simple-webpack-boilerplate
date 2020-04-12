[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/jomendez/simple-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/jomendez/simple-webpack-boilerplate)  [![dependencies Status](https://david-dm.org/jomendez/simple-webpack-boilerplate/status.svg)](https://david-dm.org/jomendez/simple-webpack-boilerplate)

# Create web apps with Webpack

<p align="center">
  <img src="https://user-images.githubusercontent.com/8228498/78913687-60067200-7a57-11ea-80de-66a3feea8c74.png">
</p>

A simple but powerful project to rapid prototyping and development of front-end apps, with scss (optional), pug (optional), ES7, webpack (bundlefy, uglyfy, etc). Very useful to create static websites or apps, without having to worry about setting up the environment.

### You can get the source code free on [Github](https://github.com/jomendez/simple-webpack-boilerplate) 

 ## Features

* **Modern Technologies:** Full support for HTML5, PUG, JavaScript (Vanilla and ES7) and CSS (Sass, scss and PostCSS)
* **Built-in Server:** Local development server with live reloading
* **Performance Tuning:** CSS and JavaScript transpilation, bundling, autoprefixing, and minification
* **Image Optimization:** Optimizes images for loading speed
* **Favicon Generation:** Automatically generates all favicons for Web, Apple and Android devices from one image file
* **Code Linting:** Full support for JavaScript (ESLint) and CSS (StyleLint) linting
* **Setup Wizard:** Optionally install helpful libraries and snippets including:
  * jQuery
  * Google Analytics
  * FTP deployment process
* **Cutting Edge:** Uses Webpack for processing and bundling your code 
* **Deployment:** Built-in support for deployment via FTP 


## Requirements

* [Node.js](http://nodejs.org/) (developed with node 12)

## Installation Steps

### Clone repo:
```
git clone https://github.com/jomendez/simple-webpack-boilerplate && cd simple-webpack-boilerplate && 
rm -rf .git && git init
````

1. Run `npm install` 
2. Run `npm run setup` to configure the app (include JQuery, etc)

In this step you'll be able to setup your google analytics, enable jquery, setup (optional) an FTP for deployments.

![image](https://user-images.githubusercontent.com/8228498/79028751-4cdec980-7b5f-11ea-87c7-1bbb27361ff7.png)

3. Run `npm run dev` to open a browser and lunch a local web server with live-reload 
4. Run `npm run build` build for production (./dist folder) 
5. Run `npm run deploy` to deploy your code to your FTP.

## If everything went well (`npm run dev`)...

You browser should open a new tab and you should see something like this:

![image](https://user-images.githubusercontent.com/8228498/79012634-bdbcbc00-7b34-11ea-9fd4-265a0eede4e2.png)


## Quick example

It is recommended to create a new page within the src folder or use the one that comes with the example *page.pug* to start adding your content. 

![image](https://user-images.githubusercontent.com/8228498/79081021-9bb76b00-7ce7-11ea-9bc6-61b996f26e4e.png)

Then you can go to src/js/app.js file and add the following lines:

```
const page = require("../page.pug");
document.querySelector('container').innerHTML = page();
```

The code above is going to transpile the pug file this particular case (but it can be an html file). 
Then we will insert the content of the page into the container tag on the index.html.
