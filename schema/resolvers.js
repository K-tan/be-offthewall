const database = require("../connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.queries = {
  Query: {
    fetchArtistById: (parent, { artist_id }) =>
      database("artists")
        .first("*")
        .where("artist_id", artist_id),
    fetchWallById: (parent, { wall_id }) =>
      database("walls")
        .first("*")
        .where("wall_id", wall_id),
    fetchAllWalls: () => database("walls").select("*"),
    fetchAllImages: () =>
      database("images")
        .select("*")
        .orderBy("image_id"),
    fetchImagesByWallId: (parent, { wall_id }) =>
      database("images")
        .select("*")
        .where("wall_id", wall_id)
  }
};

exports.mutations = {
  Mutation: {
    addImage: (parent, { image_url, blurb, wall_id, artist_id }) =>
      database("images")
        .insert({
          image_url,
          blurb,
          wall_id,
          artist_id
        })
        .returning("*"),
    login: async (
      parent,
      { artist_username, artist_password },
      context,
      info
    ) => {
      console.log(info.fieldNodes[0].arguments);
      const feUserName = info.fieldNodes[0].arguments[0].value.value;
      const fePassword = info.fieldNodes[0].arguments[1].value.value;
      console.log(feUserName, fePassword);
      const user = database("artists")
        .first("*")
        .where("artist_username", artist_username)
        .returning("*");

      if (!user) {
        console.log(new Error("Invalid Login"));
      }

      // const passwordMatch = bcrypt.compare(
      //   artist_password,
      //   user.artist_password,
      //   (err, res) => {
      //     console.log(err, res);
      //   }
      // );
      // if (!passwordMatch) {
      //   throw new Error("Invalid Login");
      // }
      // const token = jwt.sign(
      //   {
      //     id: user.artist_id,
      //     username: user.artist_username
      //   },
      //   { expiresIn: "30d" }
      // );
      // return {
      //   token,
      //   user
      // };
    }
  }
};

exports.imageNest = {
  Image: {
    wall_id: parent =>
      database("walls")
        .first("*")
        .where("wall_id", parent.wall_id)
  }
};

exports.wallNest = {
  Wall: {
    async images(parent) {
      // await new Promise(resolve => setTimeout(resolve, 500));
      const wall = database("images")
        .select("*")
        .where("wall_id", parent.wall_id);
      return wall;
    }
  }
};

exports.artistNest = {
  Artist: {
    async artists(parent) {
      const artist = database("images")
        .select("*")
        .where("artist_id", parent.artist_id);
      return artist;
    }
  }
};
