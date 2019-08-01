const database = require("../knexfile");
const { GraphQLFloat, GraphQLInt, GraphQLString } = require("graphql");
const { WallType } = require("./index-type");

exports.addWall = {
  type: WallType,
  args: {
    image_url: { type: GraphQLString },
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat },
    street_address: { type: GraphQLString },
    info: { type: GraphQLString },
    canvas_height: { type: GraphQLInt },
    canvas_width: { type: GraphQLInt },
    trigger_url: { type: GraphQLString },
    trigger_height_pixels: { type: GraphQLInt },
    trigger_width_pixels: { type: GraphQLInt },
    trigger_height_metres: { type: GraphQLFloat },
    trigger_width_metres: { type: GraphQLFloat },
    trigger_offset_x: { type: GraphQLInt },
    trigger_offset_y: { type: GraphQLInt }
  },
  resolve(
    parentValue,
    {
      image_url,
      latitude,
      longitude,
      street_address,
      info,
      canvas_height,
      canvas_width,
      trigger_url,
      trigger_height_pixels,
      trigger_width_pixels,
      trigger_height_metres,
      trigger_width_metres,
      trigger_offset_x,
      trigger_offset_y
    }
  ) {
    return database("walls")
      .insert({
        image_url,
        latitude,
        longitude,
        street_address,
        info,
        canvas_height,
        canvas_width,
        trigger_url,
        trigger_height_pixels,
        trigger_width_pixels,
        trigger_height_metres,
        trigger_width_metres,
        trigger_offset_x,
        trigger_offset_y
      })
      .returning("*");
  }
};
