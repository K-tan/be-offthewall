const database = require("../database/knexfile");
const { GraphQLID, GraphQLString } = require("graphql");
const { ArtistType } = require("./index-type");

exports.addArtist = {
  type: ArtistType,
  args: {
    artist_username: { type: GraphQLString },
    bio: { type: GraphQLString }
  },
  resolve(parentValue, { artist_username, bio }) {
    return database("artists")
      .insert({
        artist_username,
        bio
      })
      .returning("*");
  }
};

exports.updateArtist = {
  type: ArtistType,
  args: {
    artist_id: { type: GraphQLID },
    bio: { type: GraphQLString }
  },
  resolve(parentValue, { artist_username, bio }) {
    return database("artists")
      .update({
        artist_username,
        bio
      })
      .returning("*");
  }
};

exports.deleteArtist = {
  type: ArtistType,
  args: {
    artist_id: { type: GraphQLID }
  },
  resolve(parentValue, { artist_id }) {
    return database("artists")
      .delete()
      .where({ artist_id })
      .returning("*");
  }
};
