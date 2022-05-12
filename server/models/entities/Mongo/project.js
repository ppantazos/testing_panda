const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    test_cases:{
        type:Number,
        defautl: 0
    },
    organization_id: {
        type: String,
        required: true
    },
    icon:{
        type: String,
        required: true
    }
})

const Preject = mongoose.model('Preject', projectSchema);
module.exports = { Preject }