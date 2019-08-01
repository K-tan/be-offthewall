const knex = require("knex");
const database = require("../knexfile");
const { artistsData } = require("./test-data/artists");
const { wallsData } = require("./test-data/walls");
const { consumersData } = require("./test-data/consumers");
const { imagesData } = require("./test-data/images");
const { commentsData } = require("./test-data/comments");

const artistsInsertions = database("artists").insert(artistsData);
const wallsInsertions = database("walls").insert(wallsData);
const consumersInsertions = database("consumers").insert(consumersData);
const imagesInsertions = database("images").insert(imagesData);
const commentsInsertions = database("comments").insert(commentsData);

exports.seed = (knex, Promise) => {
  console.log("seeding database...");
  return Promise.all([artistsInsertions, wallsInsertions, consumersInsertions])
    .then(() => {
      return imagesInsertions;
    })
    .then(() => {
      return commentsInsertions;
    })
    .then(() => {
      console.log("...done seeding");
    });
};
