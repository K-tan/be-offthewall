const graphql = require("graphql");
const db = require("../db/pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const { ArtistType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addArtist: {
      type: ArtistType,
      args: {
        artist_username: { type: GraphQLString },
        bio: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO artists(artist_username, bio) VALUES ($1, $2) RETURNING *`; //flag
        const values = [args.artist_username, args.bio];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;
