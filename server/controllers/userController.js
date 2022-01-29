const { query } = require('express');
const db = require('../models/brdlModels');

const userController = {};

// client will provide username and password in the req.params
// we will query the db using just the username and get the password from the db. if the db provided password matches client provided password, set res.locals.auth = true
// else set res.locals.auth
userController.auth = async (req, res, next) => {
  const { username: clientUsername, password: clientPassword } = req.query;
  try {
    const queryString = 'SELECT * FROM Users WHERE username=$1';
    const queryResult = await db.query(queryString, [clientUsername]);
    console.log(queryResult.rows);
    const realPassword = queryResult.rows[0].password;
    if (!realPassword || realPassword !== clientPassword) {
      res.locals.auth = { valid: false };
      next();
    }
    else {
      res.locals.auth = { valid: true };
      next();
    }
  }
  catch {
    return next({
      log: 'Express error handler caught in userController.auth',
      status: 500,
      message: { err: 'Express error handler caught in userController.auth' }
    })
  }
}

// client will provide a unique username and a password in req.params
// we will query database with both the username and password. If the db does not contain username, it will store the username and password and set res.locals.auth = true
// else set res.locals.auth to false if username already exists
userController.create = async (req, res, next) => {
  const { username: clientUsername, password: clientPassword } = req.query;
  try {
    const queryString = 'INSERT INTO Users (username, password) VALUES (username=$1, password=$2)';
    const queryResult = await db.query(queryString, [clientUsername, clientPassword]);
    next();
  }
  catch {
    return next({
      log: 'Express error handler caught in userController.create',
      status: 500,
      message: { err: 'Express error handler caught in userController.create' }
    })
  }
}


module.exports = userController;