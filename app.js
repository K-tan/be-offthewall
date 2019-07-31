const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const expressGraphQL = require("express-graphql");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("be_offthewall_test", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Success!");
  })
  .catch(err => {
    console.log(err);
  });

// const typeDefs = gql`
//   type Query {
//     artists: [Artist]
//     artist(artist_id: ID!): Artist
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hello world!"
//   }
// };

// const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
// server.applyMiddleware({ app });

// app.use(
//   "/",
//   expressGraphQL({
//     schema: typeDefs,
//     graphiql: true
//   })
// );

app.listen({ port: 4000 }, () => {
  console.log("server ready on port 4000");
});
