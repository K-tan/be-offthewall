const database = require("../connection");

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
        .returning("*")
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
