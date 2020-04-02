const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const levelsSchema = new Schema({
    id: Number,
    Comments: String,
    IsFastChargeCapable: Boolean,
    Title: String,
});

module.exports = mongoose.model('Levels', levelsSchema);