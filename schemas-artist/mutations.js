const db = require("../db/pgAdaptor").db;
const { GraphQLID, GraphQLObjectType, GraphQLString } = require("graphql");
const { ArtistType } = require("./type");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  description: "Mutation methods on artist type",
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
    }
  }
});

exports.mutation = RootMutation;
