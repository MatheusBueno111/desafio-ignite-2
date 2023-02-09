import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-coffee-gilt.vercel.app/',
})
