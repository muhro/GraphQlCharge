const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({

});


const locationSchema = new Schema({
    coordinates: {
        type: [Number],
        required: true
    },
    type: {
        type: Boolean,
        enum: ['Point'],
        required: true
    }

});

module.exports = mongoose.model('Location', locationSchema );