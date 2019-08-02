const { buildSchema } = require("graphql");
const {
  artistType,
  wallType,
  consumerType,
  imageType,
  commentType,
  queryType,
  mutationType
} = require("./types");
const {
  fetchArtist,
  fetchAllImages,
  fetchImagesByWallId,
  fetchAllWalls,
  addImage
} = require("./root");

const schema = buildSchema(`
    ${artistType}
    ${wallType}
    ${consumerType}
    ${imageType}
    ${commentType}
    ${queryType}
    ${mutationType}
`);

const root = {
  fetchArtist,
  fetchAllImages,
  fetchImagesByWallId,
  fetchAllWalls,
  addImage
};

module.exports = { schema, root };
