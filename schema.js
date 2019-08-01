const database = require("./connection");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Artist {
        artist_id: ID!
        artist_username: String!
        social_facebook: String
        social_instagram: String
        social_twitter: String
        social_website: String
        bio: String
    }
    type Wall {
        wall_id: ID!
        canvas_url: String!
        latitude: Float!
        longitude: Float!
        street_address: String
        info: String
        canvas_height: Float!
        canvas_width: Float!
        trigger_height: Float!
        trigger_width: Float!
        trigger_offset_x: Float!
        trigger_offset_y: Float!
        created_at: String!
        images: [Image]
    }
    type Consumer {
        consumer_id: ID!
        consumer_username: String!
        bio: String
    }
    type Image {
        image_id: ID!
        image_url: String!
        blurb: String
        wall_id: Int!
        artist_id: Int!
        created_at: String!
    }
    type Comment {
        comment_id: ID!
        comment_body: String!
        image_id: Int!
        consumer_id: Int!
        created_at: String!
    }
    type Query {
        fetchArtist(artist_id: Int!): Artist
        fetchImagesByWallId(wall_id: Int!): [Image]
        fetchAllWalls: [Wall]
    }
`);

const root = {
  fetchArtist: function({ artist_id }) {
    return database("artists")
      .first("*")
      .where("artist_id", Number(artist_id))
      .returning("*");
  },
  fetchImagesByWallId: function({ wall_id }) {
    return database("images")
      .select("*")
      .where("wall_id", Number(wall_id))
      .returning("*");
  }
};

module.exports = { schema, root };
