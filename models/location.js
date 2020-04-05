const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const locationSchema = new Schema({
    Location: {
        type: pointSchema,
        required: true
    }
});

module.exports = mongoose.model('Location', locationSchema );