const mongoose = require('mongoose');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config').get(process.env.NODE_ENV);

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    force_change_pass:{
        type: Boolean,
        default: false
    },
    token:{
        type: String
    }
})

userSchema.pre('save', function(next){
    var user = this;

    if (user.isModified('password')){
        var encrypted = crypto.MD5(this._doc.password).toString();          
        user._doc.password = encrypted;
        next();
    }else{
        next();
    }
})

const User = mongoose.model('User', userSchema);
module.exports = { User }