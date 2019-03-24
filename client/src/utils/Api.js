import axios from "axios"
import dotenv from "dotenv"
dotenv.config("../../.env")
// import GOOGLE_BOOKS_API from "../config_keys"

const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;
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