# Progressive Web Apps - Foodscanner

<img src="https://github.com/joeriBouwman25/Foodscanner/blob/main/assets/banner.png" height=130>

## Table Of Contents

-  Features
-  Requirements
-  Packages
-  Installation
-  Cache Strategy
-  Author
-  License
-  Contact

## Features

Foodscanner, is an Progressive Web App where people can find information about nutritions in products. Foodscanner uses the Open Food Facts API and the Barcode Detect API to create a functional scanner to gain product information.
The applications also allows the user to fill in the barcode in an input field if there is no camera available.
If the barcode is recognized by the Open Food Facts API the user will get the product name, an image of the product, and nutritient information. the following nutrition information will be returned:

-  Fats per 100g
-  Sugars per 100g
-  Carbohydrates per 100g

The application makes use of a service worker to save visited pages in cache storage, more about this later.

<img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/homescreen.png" height=600><img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/camscreen.png" height=600><img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/detailscreen.png" height=600>

## Requirements

Foodscanner is a node.js app that works with express and Handlebars. The application implements a barcode detection API and uses express to host the application. For more information on the barcode scanner check the following link;
[https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API)
The application also make use of the open food facts API, more information about this API can be found on [https://wiki.openfoodfacts.org/API](https://wiki.openfoodfacts.org/API)

## Activity Diagram

<img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/activity%20diagram.png">

## Cache Strategy

As mentioned before this project makes use of an service worker. The service worker is used to save visited pages in the users cache storage and render pages from the cache storage for a faster performance. 

The first time the application is used the service worker will be installed and activated with the following static data already in a cache storage:

`  const cacheFiles = [
    '/',
    '/offline',
    '/styles/style.min.css',
    '/scripts/client.min.js'
]
` 

When the service worker is installed it will fetch the requests send on the page and put this in the cache storage, the service worker will do this everytime so the latest version of the page is saved. Then it will check if the worker can render the page from the cached files or need to render it from fetch. When the user has no internet connection it will still be able to render visited pages because these pages are saved in the cache storage.

If the user lands on a page its never been before without internet the service worker will render a static offline page that we saved on the service worker install.

### Packages

This project uses a number of NPM Packages in able to make te project work. The following packages are used:

-  express
-  body-parser
-  express-handlebars
-  node-fetch
-  uglify-js
-  compression

## Installation

To install this project you will need to install node, if you already installed node skip to **Install project**.

### install node

1. In your terminal run the following code:
   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
2. To check if the installation is succesful run `nvm --version` if a number is printed the installation was succeeded.
3. Restart your terminal and run `nvm install stable` to install node.
4. node is now installed. you can check this by running ` npm --version` and ```node --version

### install project

To make use of this project you need to clone this github repository by executing the following command in your terminal:

1.  `$git clone https://github.com/joeriBouwman25/progressive-web-apps-2122.git`
2.  navigate to the cloned github folders in the terminal
3.  if you're in the right folder run the following code `npm install` the packages that are requirert for this project will now be installed and you're app is ready for running


## Author

J. Bouwman: [joeriBouwman25](https://github.com/joeriBouwman25)


## license

Foodscanner is released under terms of the MIT license.

## Contact

Feel free to ask questions or contact me!

Joeri.bouwman@hva.nl
