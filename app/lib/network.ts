import axios, { AxiosInstance } from 'axios'

export const BASE_URL = 'https://itunes.apple.com'

export const customAxios: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})
