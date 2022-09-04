import { mockAPI } from '../data'
import axios from "axios"
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
    searchMovies(searchterm, callback) {
        // return new Promise((resolve, reject) => {
        //     const data = mockAPI.getSearch()
        //     setTimeout(() => {
        //         resolve(data);
        //     }, 2000)
        // }).then(response => {
        //     callback(response)
        // })
        axios.get(`https://imdb-api.com/en/API/SearchMovie/k_q246kim4/${searchterm}`)
        .then(response => {
            callback(response.data)
        })
    }
}

export default apiClient