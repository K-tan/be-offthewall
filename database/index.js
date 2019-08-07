const production = require("./production-data");
const test = require("./test-data");
const ENV = process.env.NODE_ENV || "test";
const dataConfig = { production, test };

module.exports = dataConfig[ENV];
