const { db } = require("../db/pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { ArtistType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    artist: {
      type: ArtistType,
      args: {
        artist_id: {
          type: GraphQLID
        }
      },

      resolve(parentValue, args) {
        const query = `SELECT * FROM artists WHERE artist_id=$1`;
        const values = [Number(args.artist_id)];
        // console.log(values);
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;
