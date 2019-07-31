const express = require("express");
const expressGraphQL = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const { query } = require("./schema/index-query");
const { mutation } = require("./schema/index-mutations");

const schema = new GraphQLSchema({
  query,
  mutation
});

const app = express();

app.use(
  "/",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log("GraphQl server now running on localhost:3000")
);
