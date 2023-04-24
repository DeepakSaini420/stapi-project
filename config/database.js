    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'database-1.cwosjmgc2jbr.us-east-1.rds.amazonaws.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'ecommerce'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'password'),
        },
        debug: false,
      },
    });