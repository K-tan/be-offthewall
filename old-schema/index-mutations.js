const { GraphQLObjectType } = require("graphql");
const {
  addArtist,
  updateArtist,
  deleteArtist
} = require("./mutations-artists");
const { addImage } = require("./mutations-images");
const { addWall } = require("./mutations-walls");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  description: "Mutation methods",
  fields: {
    addArtist,
    updateArtist,
    deleteArtist,
    addWall,
    addImage
  }
});

exports.mutation = RootMutation;
