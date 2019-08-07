const knex = require("knex");
const dbConfig = require("./knexfile");

exports.database = knex(dbConfig);
