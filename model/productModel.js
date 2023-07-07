const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
    default: true,
  },
  items: [
    {
      foodName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      status: {
        type: Boolean,
        default: true
      }
    },
  ],
});

module.exports = mongoose.model("products", productSchema);
