const mongoose = require('mongoose');

let cartSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    products: {type: [mongoose.Schema.Types.ObjectId], ref: 'Game', required: true}
});

let Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;