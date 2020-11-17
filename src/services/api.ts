import axios from 'axios';

const api = axios.create({
  baseURL: 'https://petlove-deploy.herokuapp.com/',
})

export default api;