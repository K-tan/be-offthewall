exports.up = function(knex, Promise) {
  return knex.schema.createTable("artists", artistsTable => {
    artistsTable.increments("artist_id").primary();
    artistsTable.string("artist_username").notNullable();
    artistsTable.string("artist_password").notNullable();
    artistsTable.string("social_facebook");
    artistsTable.string("social_instagram");
    artistsTable.string("social_twitter");
    artistsTable.string("social_website");
    artistsTable.string("bio");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("artists");
};
