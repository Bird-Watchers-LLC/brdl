const { query } = require('express');
const db = require('../models/brdlModels');
const axios = require('axios');

const birdController = {};

// GET -- client will provide username and lat/long in req.query { username: value, lat: value, long: value }
// we will respond with last 10 birds in the area and birds the user has seen (1. birds seen in all time, 2. birds seen in specific area)
    // response = { 
//     birds: [ { comBirdName: value, sciBirdName: value }, {...}, ... ],
//     seenBirds: [ { comBirdName: value, sciBirdName: value, timeStamp: value }. {...}, ... ]
//     }

        // call API and retrieve last 10 birds seen using lat/long and api key
        // lat/long must be up to 2 decimal points
birdController.nearby = async (req, res, next) => {
    const { username, lat, long } = req.query;
    const tenBirds = [];
    try {
        const apiResponse = await axios.get(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${long}`, {
            headers: { "x-ebirdapitoken": "er9pqjjuc7rv" }
           })
        let i = 0;
        while (i < 10) {
            tenBirds.push(apiResponse.data[i++])
        }
        let newBirdList = tenBirds.map(bird => ({
            comName: bird.comName,
            sciName: bird.sciName,
            locName: bird.locName,
            lat: bird.lat,
            long: bird.lng
        }))
        res.locals.nearby = { birds: newBirdList }; 
        console.log(res.locals.nearby);
        return next();
    } catch (err) {
        return next({
            log: `Express error handler caught in birdController.nearby: ${err.message}`,
            status: 500,
            message: { err: 'Express error handler caught in birdController.nearby' }
          })
     }
};

// POST -- when user clicks on a bird they have seen in the area, client will provide username, lat/long, timeStamp, commBirdName, sciBirdName
// we will respond with T/F if bird was successfully added to database

// DELETE -- when a user "unclicks" a bird they have seen, client will provide username, sciBirdName
// we will respond with T/F if bird was successfully deleted from database

module.exports = birdController;

