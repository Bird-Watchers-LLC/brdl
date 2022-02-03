const { query } = require('express');
const db = require('../models/brdlModels');

const userController = {};

// client will provide username and password in the req.query
// we will query the db using just the username and get the password from the db. if the db provided password matches client provided password, set res.locals.auth = true
// else set res.locals.auth
userController.auth = async (req, res, next) => {
  const { username: clientUsername, password: clientPassword } = req.query;
  try {
    const queryString = 'SELECT * FROM Users WHERE username=$1';
    const queryResult = await db.query(queryString, [clientUsername]);
    if (!queryResult.rows.length || queryResult.rows[0].password !== clientPassword) {
      console.log(`Auth failed using username: ${clientUsername} and password: ${clientPassword}`);
      res.locals.auth = { valid: false };
      return next();
    }
    res.locals.auth = { valid: true, fullName: queryResult.rows[0].name };
    console.log(`Auth success using username: ${clientUsername} and password: ${clientPassword}`);
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in userController.auth: ${err.message}`,
      status: 500,
      message: { err: 'Express error handler caught in userController.auth' },
    });
  }
};

// client will provide a unique username and a password in req.body
// we will query database with both the username and password. If the db does not contain username, it will store the username and password and set res.locals.auth = true
// else set res.locals.auth to false if username already exists
userController.create = async (req, res, next) => {
  // destructure username,password, and fullname from req.body
  // note - double check with post request on variable names
  console.log(req.body);
  const { username, password, fullname } = req.body;
  try {
    const queryCheckString = `SELECT * FROM users WHERE username = $1`;
    const queryCheckResult = await db.query(queryCheckString, [username]);
    // console.log(queryCheckResult);
    if (queryCheckResult.rows.length > 0) {
      res.locals.auth = { valid: false };
      console.log('username already exist');
      return next();
    }
    const queryString = `INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *`;
    const queryResult = await db.query(queryString, [fullname, username, password]);
    res.locals.auth = { valid: true, fullname, username };
    console.log('account succcessfully made');
    console.log(queryResult);
    return next();
  } catch (err) {
    return next({
      log: `Express error handler caught in userController.create: ${err.message}`,
      status: 500,
      message: { err: 'Express error handler caught in userController.create' },
    });
  }
};

module.exports = userController;
