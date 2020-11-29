import axios from 'axios'

const baseUrl = process.env.VUE_APP_JOBS_API_URL


const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json'
    }
})

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
