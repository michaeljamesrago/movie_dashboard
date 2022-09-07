import axios from "axios"
const APIKEY = "k_gecxxitm"
const apiClient = {
    fetchTopMovies(callback) {
        const url = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
        let cachedResponse = localStorage.getItem('topMovies') || '{}'
        cachedResponse = JSON.parse(cachedResponse)
        if (!!cachedResponse.cachedTime && Date.now() - cachedResponse.cachedTime < 604800000) {
            console.log("Cached Response for top Movies")
            callback(cachedResponse.data)
        } else {
          axios.get(url)
          .then(response => {
            const now = Date.now()
            const cacheItem = {
                cachedTime: now,
                data: response.data
            }
            localStorage.setItem('topMovies', JSON.stringify(cacheItem))
            callback(response.data)
          })
        }
    },     
    searchMovies(searchterm, callback) {
        const url = `https://imdb-api.com/en/API/SearchMovie/${APIKEY}/${searchterm}`
        let cachedResponse = localStorage.getItem(`searchMovies_${url}`) || '{}'
        cachedResponse = JSON.parse(cachedResponse)
        if (!!cachedResponse.cachedTime && Date.now() - cachedResponse.cachedTime < 604800000) {
            console.log("Cached Response for Search Movies")
            callback(cachedResponse.data)
        } else {
          axios.get(url)
          .then(response => {
            const now = Date.now()
            const cacheItem = {
                cachedTime: now,
                data: response.data
            }
            localStorage.setItem(`searchMovies_${url}`, JSON.stringify(cacheItem))
            callback(response.data)
          })
        }
    },
    fetchMovieReviews(movieId, callback) {
      const url = `https://imdb-api.com/en/API/Reviews/${APIKEY}/${movieId}`
      let cachedResponse = localStorage.getItem(`reviewMovies_${url}`) || '{}'
      cachedResponse = JSON.parse(cachedResponse)
      if (!!cachedResponse.cachedTime && Date.now() - cachedResponse.cachedTime < 604800000) {
        console.log("Cached Response for Search Movies")
        callback(cachedResponse.data)
      } else {
        axios.get(url)
        .then(response => {
          const now = Date.now()
          const cacheItem = {
              cachedTime: now,
              data: response.data
          }
          localStorage.setItem(`reviewMovies_${url}`, JSON.stringify(cacheItem))
          callback(response.data)
        })
      }
    }
}

export default apiClient