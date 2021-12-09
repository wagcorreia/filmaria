import axios from 'axios';

// https://sujeitoprogramador.com/r-api/?api=filmes/
// Base URL > https://sujeitoprogramador.com
// r-api/?api=filmes/ (todos os filmes)
// r-api/?api=filmes/123  (Filome com ID 123)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;