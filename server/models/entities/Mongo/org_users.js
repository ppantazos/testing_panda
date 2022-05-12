const mongoose = require('mongoose');
// const config = require('../../config/config').get(process.env.NODE_ENV);


const orgUserSchema = mongoose.Schema({
    org_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    is_admin:{
        type: Boolean,
        required: false,
        default: false
    },
    jobs:[{type: mongoose.Schema.Types.ObjectId}],
    teams:[{type: mongoose.Schema.Types.ObjectId, required: false}]
})

const orgUser = mongoose.model('org_user', orgUserSchema);
module.exports = { orgUser }