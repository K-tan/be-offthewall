const db = require("../db/pgAdaptor").db;
const { GraphQLID, GraphQLString } = require("graphql");
const { ArtistType } = require("./index-type");

exports.addArtist = {
  type: ArtistType,
  args: {
    artist_username: { type: GraphQLString },
    bio: { type: GraphQLString }
  },
  resolve(parentValue, args) {
    const query = `INSERT INTO artists(artist_username, bio) VALUES ($1, $2) RETURNING *`;
    const values = [args.artist_username, args.bio];
    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
};

exports.updateArtist = {
  type: ArtistType,
  args: {
    artist_id: { type: GraphQLID },
    bio: { type: GraphQLString }
  },
  resolve(parentValue, args) {
    const query = `UPDATE artists SET bio = $2 WHERE artist_id = $1 RETURNING *`;
    const values = [args.artist_id, args.bio];
    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
};

exports.deleteArtist = {
  type: ArtistType,
  args: {
    artist_id: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    const query = `DELETE FROM artists WHERE artist_id = $1 RETURNING *`;
    const values = [Number(args.artist_id)];
    console.log(values);
    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
};
