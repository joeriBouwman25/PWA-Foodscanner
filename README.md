# Progressive Web Apps - Foodscanner

<img src="https://github.com/joeriBouwman25/Foodscanner/blob/main/assets/banner.png" height=130>

Foodscanner, is an Progressive Web App where people can find information about nutritions in products. Foodscanner uses Open Food Facts API and Barcode Detect API to create a functional scanner to gain product information.

<img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/homescreen.png" height=600><img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/camscreen.png" height=600><img src="https://github.com/joeriBouwman25/progressive-web-apps-2122/blob/main/assets/images/detailscreen.png" height=600>

## Requirements

Foodscanner is a node.js app that works with express and Handlebars. The application implements a barcode detection API and uses express to host the application. For more information on the barcode scanner check the following link;
[https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API)
The application also make use of the open food facts API, more information about this API can be found on [https://wiki.openfoodfacts.org/API](https://wiki.openfoodfacts.org/API)

### Packages

This project uses a number of NPM Packages in able to make te project work. The following packages are used:

- express
- body-parser
- express-handlebars

## Installation

To install this project you will need to install node, if you already installed node skip to **Install project**.

#### install node

1. In your terminal run the following code:
   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
2. To check if the installation is succesful run `nvm --version` if a number is printed the installation was succeeded.
3. Restart your terminal and run `nvm install stable` to install node.
4. node is now installed. you can check this by running ` npm --version` and ```node --version

#### install project

To make use of this project you need to clone this github repository by executing the following command in your terminal:

1.  `$git clone https://github.com/joeriBouwman25/progressive-web-apps-2122.git`
2.  navigate to the cloned github folders in the terminal
3.  if you're in the right folder run the following code `npm install` the packages that are requirert for this project will now be installed and you're app is ready for running

## Author and collaborators

J. Bouwman: [joeriBouwman25](https://github.com/joeriBouwman25)

## FAQ

-

## license

Foodscanner is released under terms of the MIT license.

## Contact

Feel free to ask questions or contact me!

Joeri.bouwman@hva.nl
