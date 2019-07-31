const { GraphQLObjectType } = require("graphql");
const { fetchArtist, fetchAllArtists } = require("./queries-artists");
const { fetchImagesByWallID } = require("./queries-images");
const { fetchAllWalls, fetchArtedWalls } = require("./queries-walls");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  description: "Query methods on artist type",
  fields: {
    fetchArtist,
    fetchAllArtists,
    fetchAllWalls,
    fetchArtedWalls,
    fetchImagesByWallID
  }
});

exports.query = RootQuery;
