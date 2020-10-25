
exports.up = function(knex) {
    return knex.schema.table('animal_profiles', table => {
        table.string('photo').notNullable(); 
    })
};

exports.down = function(knex) {
    return knex.schema.table('animal_profiles', table => {
        table.dropColumn('photo'); 
    })
};