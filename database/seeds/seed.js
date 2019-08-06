const bcrypt = require("bcryptjs");
const saltRounds = 10;
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
      let hashedData = [...artistsData];
      let salt = bcrypt.genSaltSync(saltRounds);
      hashedData.forEach((artist, index) => {
        if (artist.password === undefined) {
          hashedData[index].artist_password = "password";
        }
        hashedData[index].artist_password = bcrypt.hashSync(
          artist.artist_password,
          salt
        );
      });
      const artistsInsertions = database("artists").insert(hashedData);
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
