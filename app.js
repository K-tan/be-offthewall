const express = require("express");
const expressGraphQL = require("express-graphql");
// const { GraphQLSchema } = require("graphql");
const { migrate } = require("graphql-migrate");
const dbConfig = require("./knexfile");
// const { query } = require("./schema/index-query");
// const { mutation } = require("./schema/index-mutations");
const { schema, root } = require("./schema");
// const { types } = require('./schema/index-type')

// const schema = new GraphQLSchema({
//   query,
//   mutation
//   // types
// });

migrate(dbConfig, schema).then(() => {
  console.log(schema);
  console.log("your database is up to date");
});

const app = express();

app.use(
  "/",
  expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log("GraphQl server now running on localhost:3000")
);
