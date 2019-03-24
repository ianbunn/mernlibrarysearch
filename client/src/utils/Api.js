import axios from "axios"
require("dotenv").config("../../../.env")
// import dotenv from "dotenv"
// dotenv.config()
// import GOOGLE_BOOKS_API from "../config_keys"

const APIKEY = process.env.GOOGLE_BOOKS_API;
const BASEURL = `https://www.googleapis.com/books/v1/volumes?key=${APIKEY}&orderBy=relevance`

export default {
    search: function(query) {
        return axios.get(`${BASEURL}&q=${query}`)
    },
    saveBook: function (book) {
        return axios.post("/api/books", book);
    },
    getBooks: function() {
        return axios.get("/api/books")
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}