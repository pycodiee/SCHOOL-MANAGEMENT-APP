import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors here
    if (error.response?.status === 401) {
      // Handle unauthorized
      console.error('Unauthorized access')
    } else if (error.response?.status === 500) {
      // Handle server error
      console.error('Server error occurred')
    }
    return Promise.reject(error)
  }
)

// API functions
export const schoolsAPI = {
  // Get all schools
  getAll: () => api.get('/api/schools'),
  
  // Get school by ID
  getById: (id) => api.get(`/api/schools/${id}`),
  
  // Create new school
  create: (formData) => api.post('/api/schools', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  
  // Update school
  update: (id, data) => api.put(`/api/schools/${id}`, data),
  
  // Delete school
  delete: (id) => api.delete(`/api/schools/${id}`),
}

export default api

