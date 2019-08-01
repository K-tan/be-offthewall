exports.up = function(knex, Promise) {
  return knex.schema.createTable("walls", wallsTable => {
    wallsTable.increments("wall_id").primary();
    wallsTable.string("canvas_url").notNullable();
    wallsTable.float("latitude").notNullable();
    wallsTable.float("longitude").notNullable();
    wallsTable.string("street_address");
    wallsTable.string("info");
    wallsTable.float("canvas_height").notNullable();
    wallsTable.float("canvas_width").notNullable();
    wallsTable.float("trigger_height").notNullable();
    wallsTable.float("trigger_width").notNullable();
    wallsTable.float("trigger_offset_x").notNullable();
    wallsTable.float("trigger_offset_y").notNullable();
    wallsTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("walls");
};
