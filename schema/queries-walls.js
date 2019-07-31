const { db } = require("../db/pgAdaptor");
const { GraphQLList } = require("graphql");
const { WallType } = require("./index-type");

exports.fetchAllWalls = {
  type: new GraphQLList(WallType),
  resolve() {
    const query = `SELECT * FROM walls`;
    return db
      .many(query)
      .then(res => res)
      .catch(err => err);
  }
};

exports.fetchArtedWalls = {
  type: new GraphQLList(WallType),
  resolve() {
    const query = `SELECT * FROM walls WHERE is_arted = 't'`;
    return db
      .many(query)
      .then(res => res)
      .catch(err => err);
  }
};
