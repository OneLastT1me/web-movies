import { Outlet } from "react-router-dom";
import { Conteiner, Wrapper } from "./styled";
import './Home'

export default function Main() {
    return(
        <Wrapper sx={{backgroundColor:'#0E0E0E'}}>
            <Conteiner>
                <Outlet />
            </Conteiner>
        </Wrapper>
    )
}