const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "test";
const knex = require("knex");
const dbConfig =
  ENV === "production"
    ? {
        client: "pg",
        seeds: { directory: "./database" },
        connection: process.env.DB_URL
      }
    : require("./knexfile");

const database = knex(dbConfig);

module.exports = database;
