const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesSchema= new Schema({
    id: Number,
    speciesName: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
});

module.exports = mongoose.model('Species', speciesSchema);