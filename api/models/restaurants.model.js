const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    unique: [true, 'This address is registered']
  },
  location: {
    type: String,
    required: true,
  },
  web: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
    unique: [true, 'This phone is registered']
  },
  burguers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "burger",
    },
  ],
});


const restaurantModel = mongoose.model('restaurant', restaurantSchema);
module.exports = restaurantModel