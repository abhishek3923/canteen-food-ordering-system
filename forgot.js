const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    mobile: {
        type: Number
      
    }
}, { collection: 'forgot', timestamps: true });

module.exports = mongoose.model('forgot', UserSchema);