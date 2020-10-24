
exports.up = function(knex) {
  return knex.schema.createTable('adopter_profiles', table =>{
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.string('animal').notNullable();
      table.string('age').notNullable();
      table.string('size').notNullable();
      table.timestamp('joined_on').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('adopter_profiles');
};
