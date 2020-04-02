const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currentTypeSchema = new Schema({
    id: Number,
    Description: String,
    Title: String,
});

module.exports = mongoose.model('CurrentType', currentTypeSchema);
