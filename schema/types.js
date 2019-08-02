exports.artistType = `type Artist {
    artist_id: ID!
    artist_username: String!
    artist_apiKey: String!
    social_facebook: String
    social_instagram: String
    social_twitter: String
    social_website: String
    bio: String
}`;

exports.wallType = `type Wall {
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
}`;

exports.consumerType = `type Consumer {
    consumer_id: ID!
    consumer_username: String!
    bio: String
}`;

exports.imageType = `type Image {
    image_id: ID!
    image_url: String!
    blurb: String
    wall_id: Int!
    artist_id: Int!
    created_at: String!
}`;
exports.commentType = `type Comment {
    comment_id: ID!
    comment_body: String!
    image_id: Int!
    consumer_id: Int!
    created_at: String!
}`;

exports.queryType = `type Query {
    fetchArtist(artist_id: Int!): Artist
    fetchAllImages: [Image]
    fetchImagesByWallId(wall_id: Int!): [Image]
    fetchAllWalls: [Wall]
}`;

exports.mutationType = `type Mutation {
    addImage(image_id: Int!, image_url: String!, blurb: String, wall_id: Int!, artist_id:Int!): Image
}`;
