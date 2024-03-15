import {  Typography } from "@mui/material"
import { Conteiner } from "./styled"
import {CategoryDefinitions} from '../../Helper'
import { url } from '../../Constants/url'
type Props = {
    name: string,
    date: string,
    genre: number[],
    img: string
}





export default function CardPreview({name, date, genre, img}: Props) {
    return(
        <Conteiner>
            <img src={url(img)}/>
            <Typography variant='body2'>{name}</Typography>   
            <Typography variant='h6'>{date}, {CategoryDefinitions(genre)[0]}</Typography>
        </Conteiner>
    )
}