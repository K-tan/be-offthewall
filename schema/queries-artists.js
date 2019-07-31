const database = require("../database/knexfile");
const { GraphQLID, GraphQLList } = require("graphql");
const { ArtistType } = require("./index-type");

exports.fetchArtist = {
  type: ArtistType,
  args: {
    artist_id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, { artist_id }) {
    return database("artists")
      .first("*")
      .where("artist_id", Number(artist_id))
      .returning("*");
  }
};

exports.fetchAllArtists = {
  type: new GraphQLList(ArtistType),
  resolve() {
    return database("artists").select("*");
  }
};
