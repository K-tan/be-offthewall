const { GraphQLObjectType } = require("graphql");
const { fetchArtistByID, fetchAllArtists } = require("./queries-artists");
const { fetchAllImages, fetchImagesByWallID } = require("./queries-images");
const { fetchAllWalls, fetchArtedWalls } = require("./queries-walls");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  description: "Query methods on artist type",
  fields: {
    fetchArtistByID,
    fetchAllArtists,
    fetchAllWalls,
    fetchArtedWalls,
    fetchAllImages,
    fetchImagesByWallID
  }
});

exports.query = RootQuery;
