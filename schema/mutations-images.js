const database = require("../database/knexfile");
const { GraphQLID, GraphQLString } = require("graphql");
const { ImageType } = require("./index-type");

exports.addImage = {
  type: ImageType,
  args: {
    image_url: { type: GraphQLString },
    blurb: { type: GraphQLString },
    artist_id: { type: GraphQLID },
    wall_id: { type: GraphQLID }
  },
  resolve(parentValue, { image_url, blurb, artist_id, wall_id }) {
    return database("images")
      .insert({
        image_url,
        blurb,
        artist_id,
        wall_id
      })
      .returning("*");
  }
};
