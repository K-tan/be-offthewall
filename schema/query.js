const { db } = require("../db/pgAdaptor");
const { GraphQLID, GraphQLList, GraphQLObjectType } = require("graphql");
const { ArtistType, WallType, ImageType } = require("./type");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  description: "Query methods on artist type",
  fields: {
    fetchArtist: {
      type: ArtistType,
      args: {
        artist_id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM artists WHERE artist_id=$1`;
        const values = [Number(args.artist_id)];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    fetchAllArtists: {
      type: new GraphQLList(ArtistType),
      resolve() {
        const query = `SELECT * FROM artists`;
        return db
          .many(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    fetchAllWalls: {
      type: new GraphQLList(WallType),
      resolve() {
        const query = `SELECT * FROM walls`;
        return db
          .many(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    fetchArtedWalls: {
      type: new GraphQLList(WallType),
      resolve() {
        const query = `SELECT * FROM walls WHERE is_arted = 't'`;
        return db
          .many(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    fetchImagesByWallID: {
      type: new GraphQLList(ImageType),
      args: {
        wall_id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM images WHERE wall_id=$1`;
        const values = [Number(args.wall_id)];
        return db
          .many(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;
