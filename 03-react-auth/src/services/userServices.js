import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getMeUserService = (token) => axios.get(`${BASE_URL}/users/me`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export {
  registerUserService,
  loginUserService,
  getMeUserService
}
