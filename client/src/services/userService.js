// client/src/services/userService.js
import api from './api';

// Auth endpoints
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (data) => api.post('/auth/register', data);

// User CRUD
export const getUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/users', userData);
