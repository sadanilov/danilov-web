// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres://vtgfovznhfmief:70fb5588de4ba79693bdb28dfb6e51c4badd3c0f4b63d2195e2c87a22c1fa0e7@ec2-174-129-224-33.compute-1.amazonaws.com:5432/d2og4radng2nqm',
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
    client: 'postgres://vtgfovznhfmief:70fb5588de4ba79693bdb28dfb6e51c4badd3c0f4b63d2195e2c87a22c1fa0e7@ec2-174-129-224-33.compute-1.amazonaws.com:5432/d2og4radng2nqm',
      connection: {
          database: 'danilov-web',
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