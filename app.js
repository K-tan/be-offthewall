const graphql = require("graphql");
const express = require("express");
const expressGraphQL = require("express-graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/query");
const { mutation } = require("./schemas/mutation");

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
