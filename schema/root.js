const database = require("../connection");

exports.fetchArtist = function({ artist_id }) {
  return database("artists")
    .first("*")
    .where("artist_id", Number(artist_id))
    .returning("*");
};

exports.fetchImagesByWallId = function({ wall_id }) {
  return database("images")
    .select("*")
    .where("wall_id", Number(wall_id))
    .returning("*");
};

exports.fetchAllWalls = function({}) {
  return database("walls")
    .select("*")
    .returning("*");
};
