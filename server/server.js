const path = require('path'),
  express = require('express'),
  PORT = 3000,
  app = express();

const userController = require('./controllers/userController');
const geoController = require('./controllers/geoController');
const birdController = require('./controllers/birdController');

app.use(express.json()); // replaces body-parser
app.use(express.urlencoded({ extended: true })); // Helps parse different data types

// handle GET & POST requests to /gainAccess

// Login route
app.get('/gainAccess', userController.auth, (req, res) => {
  // middleware will return a boolean.
  // if false, res.send('Login credentials are invalid')
  // else, direct user to the profile page
  res.status(200).set('Access-Control-Allow-Origin', '*').json(res.locals.auth);
});

// Account creation
app.post('/gainAccess', userController.create, (req, res) => {
  console.log('here');
  // mw will return a boolean
  // if false, res.send('Account creation failed')
  // else, direct user to profile page
  res.status(200).set('Access-Control-Allow-Origin', '*').json(res.locals.auth);
});

// User profile - client will send a GET request to /profile with this info:
//{ username: value, lat: value, long: value }
//// mw will return

// Local error handler (404/missing routes)
app.use('*', (req, res) => {
  res.status(404).send('PAGE NOT FOUND!!!');
});
// Global error handler (middleware errors)
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Express error handler caught unknown middleware error' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log('Server listening on PORT', PORT);
});

module.exports = app;
