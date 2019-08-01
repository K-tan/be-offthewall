exports.up = function(knex, Promise) {
  return knex.schema.createTable("consumers", consumersTable => {
    consumersTable.increments("consumer_id").primary();
    consumersTable.string("consumer_username").notNullable();
    consumersTable.string("bio");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("consumers");
};
