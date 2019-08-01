const database = require("../connection");
const { GraphQLID, GraphQLList } = require("graphql");
const { ImageType } = require("./index-type");

exports.fetchAllImages = {
  type: new GraphQLList(ImageType),
  resolve() {
    return database("images")
      .select("*")
      .returning("*");
  }
};

exports.fetchImagesByWallID = {
  type: new GraphQLList(ImageType),
  args: {
    wall_id: {
      type: GraphQLID
    }
  },
  resolve(parentValue, { wall_id }) {
    return database("images")
      .select("*")
      .where("wall_id", Number(wall_id))
      .returning("*");
  }
};
