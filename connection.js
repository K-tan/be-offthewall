const ENV = process.env.NODE_ENV || "test";
const knex = require("knex");

const dbConfig = require("./knexfile");
// ENV === "production"
//   ? {
//       client: "pg",
//       seeds: { directory: "./database/seeds" },
//       connection: process.env.DB_URL
//     }
//   : require("./knexfile");

const database = knex(dbConfig);

console.log(dbConfig);

module.exports = database;
