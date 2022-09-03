import { mockAPI } from '../data'
const apiClient = {
    fetchTopMovies(callback) {
        return new Promise((resolve, reject) => {
            const data = mockAPI.getTop()
            setTimeout(() => {
                resolve(data);
            }, 2000)
        }).then(response => {
            callback(response)
        })
    }, 
    searchMovies(callback, errorHandler) {
        return new Promise((resolve, reject) => {
            const data = mockAPI.getSearch()
            setTimeout(() => {
                console.log(data)
                resolve(data);
            }, 2000)
        }).then(response => {
            callback(response)
        })
    }
}

export default apiClient