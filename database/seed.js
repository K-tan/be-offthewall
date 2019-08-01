const ENV = process.env.NODE_ENV || "test";

const database = require("../connection");
const { artistsData } = require(`./${ENV}-data/artists`);
const { wallsData } = require(`./${ENV}-data/walls`);
const { consumersData } = require(`./${ENV}-data/consumers`);
const { imagesData } = require(`./${ENV}-data/images`);
const { commentsData } = require(`./${ENV}-data/comments`);

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
