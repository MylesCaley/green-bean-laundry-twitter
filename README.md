green-bean-examples
============

This repository contains several examples of using the Green Bean for appliance communications.  For details on the Green Bean SKD visit [Green Bean on GitHub](https://github.com/GEMakers/green-bean).  

To install, execute the following:
``````
git clone https://github.com/GEMakers/green-bean-examples
cd ./green-bean-examples
npm install
``````

## Tweeting Dryer
Many people would like to know when their dryer completes a load, so that they can do another load.  This example sends a tweet when the dryer finishes.  To set it up, you will need to initialize an API application with [Twitter](http://twitter.com), and put the credentials in `twitter-creds.json`.  

To run the application, connect your Green Bean to your computer and the dryer, and do the following.  
``````
node ./tweeting-dryer.js
``````
