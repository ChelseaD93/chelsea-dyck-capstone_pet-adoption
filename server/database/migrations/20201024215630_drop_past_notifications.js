
exports.up = function(knex) {
    return knex.schema.dropTable('past_notifications');
};

exports.down = function(knex) {
    return knex.schema.dropTable('past_notifications');
};