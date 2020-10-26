const bookshelf = require('../bookshelf');
const jsonColumns = require('bookshelf-json-columns');

bookshelf.plugin(jsonColumns);

const Animal_Profiles = bookshelf.model('Animal_Profiles', {
    tableName: 'animal_profiles',
    past_notifications: function() {
        return this.belongsTo('Animal_Profiles')
    },
})

module.exports = Animal_Profiles;