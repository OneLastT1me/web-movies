import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export type CoomingSoon= {
    results: {
        id: number,
        poster_path: string,
        title: number,
    }[]
}

export  const useCoomigSoon = ()  =>{
    const data = useQuery(['CoominSoon'], ()=> getCoomingSoon())
    return data
}

const getCoomingSoon  = async  () => {
    const { data }  = await axios.get<CoomingSoon>(`/3/movie/upcoming`)
    return data.results
}