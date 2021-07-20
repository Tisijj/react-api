import axios from 'a';

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
});

export default api;