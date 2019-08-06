require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const database = require("./connection");
const { getUser } = require("./utils");
const { typeDefs } = require("./schema/typeDefs");
const {
  Query,
  Mutation,
  Image,
  Wall
} = require("./schema/resolvers").resolvers;

exports.app = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
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
