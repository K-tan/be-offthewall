const database = require("../../connection");
// const {
//   artistsData,
//   commentsData,
//   consumersData,
//   imagesData,
//   wallsData
// } = require("../index.js");

const { artistsData } = require("../test-data/artists");
const { commentsData } = require("../test-data/comments");
const { consumersData } = require("../test-data/consumers");
const { imagesData } = require("../test-data/images");
const { wallsData } = require("../test-data/walls");

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
