const bookshelf = require('../bookshelf');

const Adopter_Profiles = bookshelf.model('Adopter_Profiles', {
    tableName: 'adopter_profiles',
    past_notifications: function() {
        return this.belongsTo('Adopter_Profiles')
    }
})

module.exports = Adopter_Profiles;