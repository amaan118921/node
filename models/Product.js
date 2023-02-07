const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    }      
})

module.exports = mongoose.model('Data', productSchema)