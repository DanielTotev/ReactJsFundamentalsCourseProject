const mongoose = require('mongoose');

let gameSchema = new mongoose.Schema({
    title: {type: mongoose.Schema.Types.String, required: true},
    trailer: {type: mongoose.Schema.Types.String, required: true},
    thumbnail: {type: mongoose.Schema.Types.String, required: true},
    description: {type: mongoose.Schema.Types.String, required: true},
    price: {type: mongoose.Schema.Types.Number, required: true},
    size: {type: mongoose.Schema.Types.Number, required: true},
    releaseDate: {type: Date, required: true}
});

let Game = mongoose.model('Game', gameSchema);

module.exports = Game;