const database = require("../../connection");
const {
  artistsData,
  commentsData,
  consumersData,
  imagesData,
  wallsData
} = require("../index.js");

const artistsInsertions = database("artists").insert(artistsData);
const wallsInsertions = database("walls").insert(wallsData);
const consumersInsertions = database("consumers").insert(consumersData);

exports.seed = () => {
  return Promise.all([artistsInsertions, wallsInsertions, consumersInsertions])
    .then(() => {
      return database("images").insert(imagesData);
    })
    .then(() => {
      return database("comments").insert(commentsData);
    });
};
