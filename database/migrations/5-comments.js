exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", commentsTable => {
    commentsTable.increments("comment_id").primary();
    commentsTable.string("comment_body").notNullable();
    commentsTable
      .integer("image_id")
      .references("images.image_id")
      .notNullable();
    commentsTable
      .integer("consumer_id")
      .references("consumers.consumer_id")
      .notNullable();
    commentsTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comments");
};
