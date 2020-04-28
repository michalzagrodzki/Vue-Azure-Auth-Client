import axios from 'axios';

const API_URI = process.env.VUE_APP_API

/** 
 * Instance of axios service.
 * 
 * Setup api url
 * 
 * Request interceptor is added to store auth token when making requests to API.
*/
const instance = axios.create({
  baseURL: API_URI,
  timeout: 10000,
})

instance.interceptors.request.use(
  config => {
    const accessToken = sessionStorage.getItem('access')
    if (accessToken) { config.headers.common['Authorization'] = accessToken; }
    return config;
  },
  error => {
    return Promise.reject(error);
  })

export default instance;