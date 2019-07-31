// const ENV = process.env.NODE_ENV;
// const {DB_URL} = process.env
const knex = require("knex");

const config = {
  client: "pg",
  seeds: "./seedfile",
  connection: {
    database: "be_offthewall_test"
  }
};

const database = knex(config);

// const customConfig = {
//   test: {
//     connection: {
//       database: "be_offthewall_test"
//     }
//   }
// };

module.exports = database;
