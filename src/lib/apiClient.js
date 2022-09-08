import axios from "axios"
import cacheClient from "./cacheClient"
// const APIKEY = "<Your IMDB API key goes here>"
// This is the client that communicates with the API server. All HTTP requests 
// originating in this app are defined here.

const apiClient = {
    fetchTopMovies(callback, errorHandler) {
      const url = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
      cacheClient.readThrough(url, () => axios.get(url))
      .then(response => callback(response))
      .catch(err => {
        errorHandler(err)
      })
    },
    searchMovies(searchterm, callback, errorHandler) {
      const url = `https://imdb-api.com/en/API/SearchMovie/${APIKEY}/${searchterm}`
      cacheClient.readThrough(url, () => axios.get(url))
      .then(response => callback(response))
      .catch(err => {
        errorHandler(err)
      })
    },
    fetchMovieReviews(movieId, callback, errorHandler) {
      const url = `https://imdb-api.com/en/API/Reviews/${APIKEY}/${movieId}`
      cacheClient.readThrough(url, () => axios.get(url))
      .then(response => callback(response))
      .catch(err => {
        errorHandler(err)
      })
    }
}

export default apiClient