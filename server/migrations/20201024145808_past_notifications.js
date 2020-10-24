
exports.up = function(knex) {
    return knex.schema.createTable('past_notifications', table =>{
        table
            .integer('adopter_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('adopter_profiles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('animal_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('animal_profiles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamp('notified_on').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('past_notifications');
};
