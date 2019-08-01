const database = require("../connection");
const { artistsData } = require("./test-data/artists");
const { wallsData } = require("./test-data/walls");
const { consumersData } = require("./test-data/consumers");
const { imagesData } = require("./test-data/images");
const { commentsData } = require("./test-data/comments");

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
