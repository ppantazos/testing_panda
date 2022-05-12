const mongoose = require('mongoose');
// const config = require('../../config/config').get(process.env.NODE_ENV);


const jobSchema = mongoose.Schema({
    organization_id: {
        type: String,
        required: true
    },name:{
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },description:{
        type:String,
        defautl: "",
        maxlength: 100
    },color:{
        type: String,
        required: true,
        maxlength: 7
    }
})

const Job = mongoose.model('Job', jobSchema);
module.exports = { Job }