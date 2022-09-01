import data from '../data'
const apiClient = {
    fetchMovies(callback, errorHandler) {
        return new Promise((resolve, reject) => {
            console.log('responding with data')
            resolve({ data });
        }).then(response => {
            callback(response)
        })
    }
}

export default apiClient