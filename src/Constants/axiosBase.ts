import axios from 'axios'


axios.defaults.baseURL = 'https://api.themoviedb.org'

axios.interceptors.request.use(async (config) => {
    config.headers.Authorization ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmMxY2ZkZDg2MzMzZDkxNGFmOWYyM2Q0NDg2ZTE1NyIsInN1YiI6IjY0ZTM1NjA2MzcxMDk3MDEzOTQ5ZGYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OvlgzJiFEbSsJTYV-CVRtU5Urk6kgqgfav7rNsZamAI'
    return config;
}

)

