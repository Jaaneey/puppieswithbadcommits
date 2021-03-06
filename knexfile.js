// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'puppyapp'
    },
      pool: {
      min: 1,
      max: 1
    },
    debug:true
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'puppyapp_test'
    },
      pool: {
      min: 1,
      max: 5
    },
    debug:true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
