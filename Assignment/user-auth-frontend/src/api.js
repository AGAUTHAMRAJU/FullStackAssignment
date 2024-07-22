import axios from 'axios';

const API_URL = 'http://localhost:8000/api';
export const register = (data) => axios.post(`${API_URL}/register/`, data);
export const getToken = (data) => axios.post(`${API_URL}/token/`, data);
