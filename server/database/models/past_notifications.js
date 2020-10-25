const bookshelf = require('../bookshelf');

const Past_Notifications = bookshelf.model('Past_Notifications', {
    tableName: 'past_notifications',
    adopter_profiles: function() {
        return this.hasMany('Past_Notifications')
    },
    animal_profiles: function() {
        return this.hasMany('Past_Notifications')
    }
})

module.exports = Past_Notifications;