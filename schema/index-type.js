const {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");

exports.ArtistType = new GraphQLObjectType({
  name: "Artist",
  type: "Query",
  description: "One artist",
  fields: {
    artist_id: { type: GraphQLID },
    artist_username: { type: GraphQLString },
    bio: { type: GraphQLString }
  }
});

exports.WallType = new GraphQLObjectType({
  name: "Wall",
  type: "Query",
  description: "One wall (canvas)",
  fields: {
    wall_id: { type: GraphQLID },
    image_url: { type: GraphQLString },
    is_arted: { type: GraphQLBoolean },
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
    trigger_offset_y: { type: GraphQLInt },
    created_at: { type: GraphQLString }
  }
});

exports.ImageType = new GraphQLObjectType({
  name: "Image",
  type: "Query",
  description: "One image (art)",
  fields: {
    image_id: { type: GraphQLID },
    image_url: { type: GraphQLString },
    blurb: { type: GraphQLString },
    artist_id: { type: GraphQLID },
    wall_id: { type: GraphQLID },
    created_at: { type: GraphQLString }
  }
});
