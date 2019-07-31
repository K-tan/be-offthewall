const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    artists: [Artist]
    artist(artist_id: ID!): Artist
    me: User
  }
  type Artist {
    artist_id: ID!
    artist_username: String
    bio: String
  }
`;

// exports.resolvers = {
//   Query: {
//     hello: () => "Hello world!"
//   }
// };
