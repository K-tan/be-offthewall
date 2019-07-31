const db = require("./pgAdaptor").db;
const knex = require("../db/pgAdaptor");
const { artistsData } = require("../db/test-data/artists");

const artistsInsertions = knex("artists").insert(artistsData);
return Promise.all([artistsInsertions]);

// artists.map(artist => {
//   console.log(artist.username);
//   return db
//     .query(
//       `INSERT INTO artists (artist_username, bio) VALUES ('${
//         artist.username
//       }', '${artist.bio}')`
//     )
//     .then(res => res)
//     .catch(err => err);
// });

// db.query(
//   `INSERT INTO artists (artist_username, bio) VALUES ('${
//     artists[0].username
//   }', '${artists[0].bio}')`
// )
//   .then(res => res)
//   .catch(err => err);
