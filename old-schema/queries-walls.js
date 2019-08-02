const database = require("../connection");
const { GraphQLList } = require("graphql");
const { WallType } = require("./index-type");

exports.fetchAllWalls = {
  type: new GraphQLList(WallType),
  resolve() {
    return database("walls")
      .select("*")
      .returning("*");
  }
};

exports.fetchArtedWalls = {
  type: new GraphQLList(WallType),
  resolve() {
    return database("walls")
      .select("*")
      .where("is_arted", "t")
      .returning("*");
  }
};
