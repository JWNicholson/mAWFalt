// const environment = process.env.NODE_ENV || 'development';

// const config = require('../knexfile')[environment];

// module.exports = require('knex')(config);

knex = require('knex');

const knexConfig = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);