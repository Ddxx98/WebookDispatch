const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const destinationSchema = new Schema({
    accountId: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    headers: {
        type: Map,
        of: String,
        required: true
    }
})

module.exports = model('Destination', destinationSchema);