const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { KEY } = process.env;
// const database = require("../connection");
exports.resolvers = {
  Query: {
    fetchArtistById: (parent, { artist_id }, { database }) =>
      database("artists")
        .first("*")
        .where("artist_id", artist_id),
    fetchWallById: (parent, { wall_id }, { database }) =>
      database("walls")
        .first("*")
        .where("wall_id", wall_id),
    fetchAllWalls: (parent, args, { database }) =>
      database("walls").select("*"),
    fetchAllImages: (parent, args, { database }) =>
      database("images")
        .select("*")
        .orderBy("image_id"),
    fetchImagesByWallId: (parent, { wall_id }, { database }) =>
      database("images")
        .select("*")
        .where("wall_id", wall_id)
  },
  Mutation: {
    addImage: (
      parent,
      { image_url, blurb, wall_id, artist_id },
      { database }
    ) =>
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
      { database }
    ) => {
      const user = await database("artists")
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
  },
  Image: {
    wall_id: ({ wall_id }, args, { database }) =>
      database("walls")
        .first("*")
        .where("wall_id", wall_id)
  },
  Wall: {
    async images({ wall_id }, args, { database }) {
      const wall = database("images")
        .select("*")
        .where("wall_id", wall_id);
      return wall;
    }
  },
  Artist: {
    async artists({ artist_id }, args, { database }) {
      const artist = database("images")
        .select("*")
        .where("artist_id", artist_id);
      return artist;
    }
  }
};
