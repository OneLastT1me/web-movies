import { useState } from 'react'
import Card from "../../components/card";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { Content, PaginationWrapper } from "./styled";
import Pagination from '@mui/material/Pagination';


export default function PopularMovies() {
    const [page, setPage] = useState(1);
    const  data  = usePopularMovies(page)
    
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };

    return (
        <>
        <Content>
        {
            data?.results.map(({id, title, release_date, poster_path, genre_ids}) => (
                <Card 
                    name={title} 
                    date={release_date} 
                    genre={genre_ids} 
                    img={poster_path}  
                    key={id}
                />
            ))
        }
        </Content>
        <PaginationWrapper>
            <Pagination  count={data?.total_pages} page={page} onChange={handleChange} color='primary'/>
        </PaginationWrapper>
        </>
    )
}