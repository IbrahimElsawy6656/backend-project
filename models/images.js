const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    term: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },

}, { timestamps: true });



const image = mongoose.model('image', imagesSchema);
module.exports = image;