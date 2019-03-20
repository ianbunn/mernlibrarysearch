import axios from "axios"

const APIKEY = process.env.GOOGLE_API
const BASEURL = `https://www.googleapis.com/books/v1/volumes?key=${APIKEY}&orderBy=relevance`

console.log(APIKEY)

export default {
    search: function(query) {
        return axios.get(`${BASEURL}&q=${query}`)
    }
}