const { KEY } = process.env;
// const database = require("../connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.queries = {
  Query: {
    fetchArtistById: (parent, { artist_id }, context) =>
      context
        .database("artists")
        .first("*")
        .where("artist_id", artist_id),
    fetchWallById: (parent, { wall_id }, context) =>
      context
        .database("walls")
        .first("*")
        .where("wall_id", wall_id),
    fetchAllWalls: context => context.database("walls").select("*"),
    fetchAllImages: context =>
      context
        .database("images")
        .select("*")
        .orderBy("image_id"),
    fetchImagesByWallId: (parent, { wall_id }, context) =>
      context
        .database("images")
        .select("*")
        .where("wall_id", wall_id)
  }
};

exports.mutations = {
  Mutation: {
    addImage: (parent, { image_url, blurb, wall_id, artist_id }, context) =>
      context
        .database("images")
        .insert({
          image_url,
          blurb,
          wall_id,
          artist_id
        })
        .returning("*"),
    login: async (parent, { artist_username, artist_password }, context) => {
      const user = await context
        .database("artists")
        .first("artist_id", "artist_username", "artist_password")
        .where("artist_username", artist_username)
        .returning("*");
      if (!user) {
        throw new Error("Username not recognised");
      }
      const passwordMatch = await bcrypt.compare(
        artist_password,
        user.artist_password
      );
      if (!passwordMatch) {
        throw new Error("Your password is incorrect");
      }
      const token = jwt.sign(
        {
          id: user.artist_id,
          username: user.artist_username
        },
        KEY,
        {
          expiresIn: "30d"
        }
      );
      return { token, user };
    }
  }
};

exports.imageNest = {
  Image: {
    wall_id: (parent, args, context) =>
      context
        .database("walls")
        .first("*")
        .where("wall_id", parent.wall_id)
  }
};

exports.wallNest = {
  Wall: {
    async images(parent, args, context) {
      // await new Promise(resolve => setTimeout(resolve, 500));
      const wall = context
        .database("images")
        .select("*")
        .where("wall_id", parent.wall_id);
      return wall;
    }
  }
};

exports.artistNest = {
  Artist: {
    async artists(parent) {
      const artist = context
        .database("images")
        .select("*")
        .where("artist_id", parent.artist_id);
      return artist;
    }
  }
};
