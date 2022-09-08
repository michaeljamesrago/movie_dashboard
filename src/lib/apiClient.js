import axios from "axios"
import cacheClient from "./cacheClient"
// This is the client that communicates with the API server. All HTTP requests 
// originating in this app are defined here.
const APIKEY = "k_gecxxitm"
const apiClient = {
    fetchTopMovies(callback) {
      const url = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
      cacheClient.readThrough(url, () => axios.get(url))
      .then(response => callback(response))
    },
    searchMovies(searchterm, callback) {
      const url = `https://imdb-api.com/en/API/SearchMovie/${APIKEY}/${searchterm}`
      cacheClient.readThrough(url, () => axios.get(url))
      .then(response => callback(response))
    },
    fetchMovieReviews(movieId, callback) {
      const url = `https://imdb-api.com/en/API/Reviews/${APIKEY}/${movieId}`
      cacheClient.readThrough(url, () => axios.get(url))
      .then(response => callback(response))
    }
}

export default apiClient