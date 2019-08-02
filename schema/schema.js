const { buildSchema } = require("graphql");
const {
  artistType,
  wallType,
  consumerType,
  imageType,
  commentType,
  queryType
} = require("./types");
const { fetchArtist, fetchImagesByWallId } = require("./root");

const schema = buildSchema(`
    ${artistType}
    ${wallType}
    ${consumerType}
    ${imageType}
    ${commentType}
    ${queryType}
`);

const root = {
  fetchArtist,
  fetchImagesByWallId
};

module.exports = { schema, root };
