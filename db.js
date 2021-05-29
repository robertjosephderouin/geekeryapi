module.exports = require('knex')({
  client: 'pg',
  version: '13.3',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'confidant',
    database : 'postgres'
  }
});