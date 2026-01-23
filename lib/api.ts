import axios from 'axios';
import { API_BASE_URL } from './api-config';

const API_URL = `${API_BASE_URL}/api`;

const api = axios.create({
    baseURL: API_URL,
});

// Add a request interceptor to add the JWT token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
