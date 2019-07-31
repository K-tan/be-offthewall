const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

exports.ArtistType = new GraphQLObjectType({
  name: "Artist",
  type: "Query",
  description: "One artist",
  fields: {
    artist_id: { type: GraphQLID },
    artist_username: { type: GraphQLString },
    bio: { type: GraphQLString }
  }
});
