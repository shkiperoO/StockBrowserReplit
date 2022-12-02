import axios from "axios"
const TOKEN = 'ce43g0iad3i38glcjokgce43g0iad3i38glcjol0'
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token:TOKEN
  
  }
})