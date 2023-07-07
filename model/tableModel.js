const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableSchema = new Schema({
    tableNumber: {
        type: Number,
        unique:true,
        required: true
    },
    occupied: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = mongoose.model('table', tableSchema);