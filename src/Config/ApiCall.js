import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
});

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers['Authorization'] = 'Bearer' + ' ' + token;
    return config;
});

AxiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        console.log('unauthorized user');
        window.location.href = '/'
        localStorage.clear()
    }
      return Promise.reject(error);
});

export default AxiosInstance;