const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionTypeSchema= new Schema({
    id: Number,
    FormalName: String,
    Title: String,
});

module.exports = mongoose.model('connectionType', connectionTypeSchema);