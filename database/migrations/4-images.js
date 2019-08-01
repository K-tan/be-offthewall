exports.up = function(knex, Promise) {
  return knex.schema.createTable("images", imagesTable => {
    imagesTable.increments("image_id").primary();
    imagesTable.string("image_url").notNullable();
    imagesTable.string("blurb");
    imagesTable
      .integer("wall_id")
      .references("walls.wall_id")
      .notNullable();
    imagesTable
      .integer("artist_id")
      .references("artists.artist_id")
      .notNullable();
    imagesTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("images");
};
