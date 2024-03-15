import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export  const useCoomigSoon = ()  =>{
    const data = useQuery(['CoominSoon'], ()=> getCoomingSoon())
    return data
}

const getCoomingSoon  = async  () => {
    const { data }  = await axios.get(`/3/movie/upcoming`)
    return data
}