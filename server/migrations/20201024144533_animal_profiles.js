
exports.up = function(knex) {
    return knex.schema.createTable('animal_profiles', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('size').notNullable();
        table.string('age').notNullable();
        table.string('type').notNullable();      
        table.timestamp('added_on').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('animal_profiles');
};
