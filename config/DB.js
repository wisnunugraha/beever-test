exports._ = require('knex')({
  client: 'pg',
  connection: process.env.DB_CONNECTION,
  searchPath: 'public',
});