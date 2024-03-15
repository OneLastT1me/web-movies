
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type MoviesInfomation ={
    results: {
        id: number,
        title: string,
        popularity: number,
        release_date: string,
        vote_count: number,
        vote_average: number,
        poster_path: string,
        genre_ids: number[]
    }[],
    total_pages: number
}

export const  usePopularMovies = (Page: number) => {
    const  { data }  = useQuery(['PopularMovies', Page], ()=> getPopularMovies(Page))

    return  data
}

const getPopularMovies = async (Page: number) => {
    const { data } = await axios.get<MoviesInfomation>(`/3/movie/now_playing?page=${Page}`)
    
    return data
}