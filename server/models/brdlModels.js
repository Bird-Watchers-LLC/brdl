require('dotenv').config();
const { Pool } = require('pg');
// const tokens = require('../tokens/tokens');

// const PG_URI = process.env.PG_URL;
const PG_URI =
  'postgres://quaqhtrd:7ARR0qYgG5b-Ayom6PAVdWpVYAUVwu8d@kashin.db.elephantsql.com/quaqhtrd';

const pool = new Pool({
  connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
