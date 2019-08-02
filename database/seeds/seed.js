const database = require("../../connection");
const {
  artistsData,
  commentsData,
  consumersData,
  imagesData,
  wallsData
} = require("../index.js");

exports.seed = () => {
  return database.migrate
    .rollback()
    .then(() => database.migrate.latest())
    .then(() => {
      const artistsInsertions = database("artists").insert(artistsData);
      const wallsInsertions = database("walls").insert(wallsData);
      const consumersInsertions = database("consumers").insert(consumersData);
      return Promise.all([
        artistsInsertions,
        wallsInsertions,
        consumersInsertions
      ]);
    })
    .then(() => {
      return database("images").insert(imagesData);
    })
    .then(res => {
      return database("comments").insert(commentsData);
    });
};
