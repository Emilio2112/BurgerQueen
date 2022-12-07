const mongoose = require("mongoose")
const userSchema = require('./user.model')


const burgerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
      },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant',
        required: true
    },
    style: {
        type: String,
        required: true,
        enum: ["Normal", "Cheese Burger", "Pollo", "Veggie", "Smash", "Gourmet"] //Dejamos el ENUM??
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        user: [userSchema]
    }],
    rating: [{
        type: Number,
        required: true
    }]
})

const burgerModel = mongoose.model('burger', burgerSchema)

module.exports = burgerModel