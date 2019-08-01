const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "test";

const baseConfig = {
  client: "pg",
  seeds: {
    directory: "./database/"
  }
};

const customConfig = {
  test: {
    connection: {
      database: "be_offthewall_test"
    }
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
