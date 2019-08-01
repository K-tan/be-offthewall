const express = require("express");
const expressGraphQL = require("express-graphql");
const { schema, root } = require("./schema");

const app = express();

app.use(
  "/",
  expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = app;
