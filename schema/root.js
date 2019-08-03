const database = require("../connection");

exports.fetchArtist = function({ artist_id }) {
  return database("artists")
    .first("*")
    .where("artist_id", Number(artist_id))
    .returning("*");
};

exports.fetchAllImages = function({}) {
  return database("images")
    .select("*")
    .returning("*");
};

exports.fetchImagesByWallId = () => database.images;

exports.fetchAllWalls = function({}) {
  return database("walls")
    .select("*")
    .returning("*");
};

exports.addImage = function({
  image_id,
  image_url,
  blurb,
  wall_id,
  artist_id
}) {
  return database("images")
    .insert({
      image_id,
      image_url,
      blurb,
      wall_id,
      artist_id
    })
    .returning("*");
};
