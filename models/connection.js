const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const connectionSchema= new Schema({
    id: Number,
    ConnectionTypeID: {type: Schema.Types.ObjectId, ref: 'ConnectionTypes'},
    LevelID: {type: Schema.Types.ObjectId, ref: 'Levels'},
    CurrentTypeID: {type: Schema.Types.ObjectId, ref: 'CurrentType'},
    Quantity: Number,
});

module.exports = mongoose.model('Connection', connectionSchema);