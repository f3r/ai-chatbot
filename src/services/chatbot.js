import axios from 'axios'

const app = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const ask = async (query) => {
  try {
    const { data } = await app.post('/chatbot', { query })
    return data
  } catch (error) {
    console.error(error)
  }
}