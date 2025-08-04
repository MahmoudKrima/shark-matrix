import axios from 'axios'

// const URL = import.meta.env.VITE_API_URL; // BE Shark
const URL = import.meta.env.VITE_BASE_API_URL

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
})

axiosClient.interceptors.request.use((config) => {
  // console.log(config, 'config')
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    console.log(response, 'response')
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

export default axiosClient
