// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'danilov-web',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '../db/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
      connection: {
          database: 'my_db',
          user:     'user',
          password: 'password'
      },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '../db/migrations',
      tableName: 'knex_migrations'
    }
  }

};