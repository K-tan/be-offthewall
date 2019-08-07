const knex = require("knex");
const dbConfig = require("./knexfile");

const database = knex(dbConfig);

module.exports = database;
