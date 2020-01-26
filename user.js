const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    mobile: {
        type: String
    },
    name: {
        type: String
   
    },
        emailaddress:{
        type:String
    },
    password:{
        type:String
    },
}, { collection: 'user', timestamps: true });

module.exports = mongoose.model('user', UserSchema);