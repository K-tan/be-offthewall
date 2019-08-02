const { DATABASE_URL } = process.env;
const ENV = process.env.NODE_ENV || "test";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./database/seeds"
  }
};

const customConfig = {
  test: {
    connection: {
      database: "be_offthewall_test"
    }
  },
  production: {
    connection: `${DATABASE_URL}?ssl=true`
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
