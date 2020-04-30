// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/fitness.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
     //need to ensure foreign key restrictions work
     pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);//turns on the foreign key enforcement
      }
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
   //need to ensure foreign key restrictions work
   pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);//turns on the foreign key enforcement
    }
  }

};
