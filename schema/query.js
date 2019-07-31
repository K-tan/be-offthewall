const { db } = require("../db/pgAdaptor");
const { GraphQLID, GraphQLList, GraphQLObjectType } = require("graphql");
const { ArtistType, WallType } = require("./type");

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
    }
  }
});

exports.query = RootQuery;
