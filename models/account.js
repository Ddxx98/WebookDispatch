const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { v4: uuidv4 } = require('uuid');

const accountSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    website: String,
    secretToken: {
        type: String,
        default: uuidv4
    }
})

module.exports = model('Account', accountSchema);