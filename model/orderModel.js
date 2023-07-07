const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    tableId: {
        type: Schema.Types.ObjectId,
        ref: 'table',
        unique: true
    },
    order: [
        {
            foodName: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]

});

module.exports = mongoose.model("orders", OrderSchema);