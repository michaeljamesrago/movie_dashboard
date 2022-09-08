// This is the caching facility of this application. Before any requests go to the 
// API server, cacheClient checks to see if an identical request has been made in 
// the last week. If so, the response is re-used. If not, the request goes to the 
// API server, and the response is set in localStorage.
const cacheClient = {
    readThrough(url, callback) {
        let cachedResponse = localStorage.getItem(`movie_dashboard_${url}`) || '{}'
        cachedResponse = JSON.parse(cachedResponse)
        if (!!cachedResponse.cachedTime && Date.now() - cachedResponse.cachedTime < 604800000) {
            console.log("Cached Response")
            return Promise.resolve(cachedResponse.data)
        } else {
            console.log("Getting response from server")
            return callback()
            .then(response => {
                const now = Date.now()
                const cacheItem = {
                    cachedTime: now,
                    data: response.data
                }
                localStorage.setItem(`movie_dashboard_${url}`, JSON.stringify(cacheItem))
                return Promise.resolve(response.data)
            })
        }
    }
}
export default cacheClient