const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();
const {
  queryType,
  mutationType,
  loginResponseType,
  artistType,
  commentType,
  consumerType,
  imageType,
  wallType
} = require("./schema/typeDefs");
const { Query } = require("./schema/resolvers").queries;
const { Mutation } = require("./schema/resolvers").mutations;
const { Image } = require("./schema/resolvers").imageNest;
const { Wall } = require("./schema/resolvers").wallNest;

const app = new ApolloServer({
  typeDefs: gql`
    ${queryType}
    ${mutationType}
    ${loginResponseType}
    ${artistType}
    ${commentType}
    ${consumerType}
    ${imageType}
    ${wallType}
  `,
  resolvers: {
    Query,
    Mutation,
    Image,
    Wall
  },
  context: ({ req, res }) => {},
  introspection: true,
  playground: true
});

module.exports = { app };
