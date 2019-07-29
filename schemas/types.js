const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const ArtistType = new GraphQLObjectType({
  name: "Artist",
  type: "Query",
  fields: {
    artist_id: { type: GraphQLInt },
    artist_username: { type: GraphQLString },
    bio: { type: GraphQLString }
  }
});

exports.ArtistType = ArtistType;
