const mongoose = require('mongoose');
// const config = require('../../config/config').get(process.env.NODE_ENV);


const organizationSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 2
    }
})

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = { Organization }