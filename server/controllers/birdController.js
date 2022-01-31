const { query } = require('express');
const db = require('../models/brdlModels');
const axios = require('axios');

const birdController = {};

// GET -- client will provide { username: value, lat: value, long: value } in req.query
// respond with 10 birds in area { birds: [ { comBirdName: value, sciBirdName: value }, {...}, ... ],

birdController.nearby = async (req, res, next) => {
    const { username, lat, long } = req.query;
         // lat/long must be up to 2 decimal points
    try {
        const apiResponse = await axios.get(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${long}&maxResults=10`, {
            headers: { "x-ebirdapitoken": "er9pqjjuc7rv" },
           })
        // filter data by comName, sciName, location name
        const newBirdList = apiResponse.data.map(bird => ({
            sciName: bird.sciName,
            comName: bird.comName,
            locName: bird.locName
        }))
        res.locals.nearby = { birds: newBirdList }; 
        
        // may need to insert 10 birds into db here, but will need to ensure scientific_name type is set to UNIQUE
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
// querey database to insert bird into the database
// we will respond with T/F if bird was successfully added to database
// birdController.seen = async (req, res, next) => {
//     try {
//         const { username, lat, long, timeStamp, sciBirdName } = req.query;
//         const queryString = `INSERT INTO seen_birds (username, scientific_name, time_stamp) VALUES ($1, $2, $3)`
//         const queryResult = await db.query(queryString, [username, sciBirdName, timeStamp]);
//         console.log(queryResult);
//         // need to set conditional
//         // hitting an issue when testing where current_timestamp is "no longer supported"
//         // res.locals.seen = {valid: false};
//         // res.locals.seen = {valid: true};
//         return next()
//     } catch (err) {
//         return next({
//             log: `Express error handler caught in birdController.seen: ${err.message}`,
//             status: 500,
//             message: { err: 'Express error handler caught in birdController.seen' }
//         });

//     }
// };

// DELETE -- when a user "unclicks" a bird they have seen, client will provide username, sciBirdName
// we will respond with T/F if bird was successfully deleted from database

module.exports = birdController;

