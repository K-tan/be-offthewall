const db = require("../db/pgAdaptor").db;
const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} = require("graphql");
const { ArtistType, WallType, ImageType } = require("./type");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  description: "Mutation methods",
  fields: {
    addArtist: {
      type: ArtistType,
      args: {
        artist_username: { type: GraphQLString },
        bio: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO artists(artist_username, bio) VALUES ($1, $2) RETURNING *`;
        const values = [args.artist_username, args.bio];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateArtist: {
      type: ArtistType,
      args: {
        artist_id: { type: GraphQLID },
        bio: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `UPDATE artists SET bio = $2 WHERE artist_id = $1 RETURNING *`;
        const values = [args.artist_id, args.bio];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteArtist: {
      type: ArtistType,
      args: {
        artist_id: { type: GraphQLID }
      },
      resolve(parentValue, args) {
        const query = `DELETE FROM artists WHERE artist_id = $1 RETURNING *`;
        const values = [Number(args.artist_id)];
        console.log(values);
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addWall: {
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
      resolve(parentValue, args) {
        const query = `INSERT INTO walls(image_url, latitude, longitude, street_address, info, canvas_height, canvas_width, trigger_url, trigger_height_pixels, trigger_width_pixels, trigger_height_metres, trigger_width_metres, trigger_offset_x, trigger_offset_y) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`;
        const values = [
          args.image_url,
          args.latitude,
          args.longitude,
          args.street_address,
          args.info,
          args.canvas_height,
          args.canvas_width,
          args.trigger_url,
          args.trigger_height_pixels,
          args.trigger_width_pixels,
          args.trigger_height_metres,
          args.trigger_width_metres,
          args.trigger_offset_x,
          args.trigger_offset_y
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addImage: {
      type: ImageType,
      args: {
        image_url: { type: GraphQLString },
        blurb: { type: GraphQLString },
        artist_id: { type: GraphQLID },
        wall_id: { type: GraphQLID }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO images (image_url, blurb, artist_id, wall_id) VALUES ($1,$2,$3,$4) RETURNING *`;
        const values = [
          args.image_url,
          args.blurb,
          args.artist_id,
          args.wall_id
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;
