const database = require("./connection");
const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();
const getUser = require("./utils");
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
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const user = getUser(token);
    return { database, user };
  },
  introspection: true,
  playground: true
});

module.exports = { app };
