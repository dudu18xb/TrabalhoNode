const mongoose = require('mongoose')
require('mongoose-type-email')

const _schema = {
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['teacher', 'student'],
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    }
}

const schema = new mongoose.Schema(_schema)
const Model = mongoose.model('User', schema)

module.exports = Model