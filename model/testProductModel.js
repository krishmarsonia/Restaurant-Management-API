const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testProductSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: true
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
      Price: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("testProdcts", testProductSchema);
