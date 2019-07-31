const db = require("../db/pgAdaptor").db;
const { GraphQLID, GraphQLString } = require("graphql");
const { ImageType } = require("./index-type");

exports.addImage = {
  type: ImageType,
  args: {
    image_url: { type: GraphQLString },
    blurb: { type: GraphQLString },
    artist_id: { type: GraphQLID },
    wall_id: { type: GraphQLID }
  },
  resolve(parentValue, args) {
    const query = `INSERT INTO images (image_url, blurb, artist_id, wall_id) VALUES ($1,$2,$3,$4) RETURNING *`;
    const values = [args.image_url, args.blurb, args.artist_id, args.wall_id];
    return db
      .one(query, values)
      .then(res => res)
      .catch(err => err);
  }
};
