const { db } = require("../db/pgAdaptor");
const { GraphQLID, GraphQLList } = require("graphql");
const { ArtistType } = require("./index-type");

exports.fetchArtist = {
  type: ArtistType,
  args: {
    artist_id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM artists WHERE artist_id=$1`;
    const values = [Number(args.artist_id)];
    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
};

exports.fetchAllArtists = {
  type: new GraphQLList(ArtistType),
  resolve() {
    const query = `SELECT * FROM artists`;
    return db
      .many(query)
      .then(res => res)
      .catch(err => err);
  }
};
