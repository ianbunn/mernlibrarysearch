const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { 
        type: String,
        required: true,
        unique: true
    },
    authors: {
        type: Array,
        required: true
    },
    publisheddate: String,
    categories: Array,
    description: String,
    thumbnail: String,
    link: String,
    saved: {
        type: Boolean,
        default: true 
    }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book