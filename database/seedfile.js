const database = require("./knexfile");

return database
  .select("*")
  .from("artists")
  .then(res => {
    console.log(res);
    res;
  })
  .catch(err => {
    console.error(err);
    err;
  });

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
