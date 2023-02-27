const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now
    },
    updatedAt: {
        type: Schema.Types.Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", Product);