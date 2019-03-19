import axios from "axios"

const APIKEY = process.env.GOOGLE_API
const BASEURL = `https://www.googleapis.com/books/v1/volumes?key=${APIKEY}&q=${query}&orderBy=relevance`

export default {
    search: function(query) {
        return axios.get(BASEURL, query, APIKEY)
    }
}