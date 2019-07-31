const { db } = require("../db/pgAdaptor");
const { GraphQLID, GraphQLList } = require("graphql");
const { ImageType } = require("./index-type");

exports.fetchImagesByWallID = {
  type: new GraphQLList(ImageType),
  args: {
    wall_id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM images WHERE wall_id=$1`;
    const values = [Number(args.wall_id)];
    return db
      .many(query, values)
      .then(res => res)
      .catch(err => err);
  }
};
