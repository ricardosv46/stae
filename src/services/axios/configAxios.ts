import axios from 'axios'

export const apiService = axios.create({
    baseURL: `${process.env.BASE_URL}`
})

apiService.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token
    }
    return config
})

export default apiService
