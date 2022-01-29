const path = require('path'),
  express = require('express'),
  PORT = 3000,
  app = express();

  app.use(express.json());// replaces body-parser
  app.use(express.urlencoded({ extended: true }));// Helps parse different data types

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('Server listening on PORT', PORT)
})

module.exports = app;