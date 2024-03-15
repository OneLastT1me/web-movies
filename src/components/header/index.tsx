import { 
    HeaderWrapper, 
    HeaderLink, 
    Conteiner,
    HeaderItem,
    HeaderIcons,

} from "./styled";
import  {ReactComponent as Logo} from "../../Icons/Logo.svg"
import Search from "./Search";
import Favorites from "./Favorits";

import { Typography } from "@mui/material";

type HeaderItem = {
    label: string
    path: string
  }[]

const MOCK: HeaderItem = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Movies',
        path: '/',
    },
    {
        label: 'Popular',
        path: '/Popular',
    },
    {
        label: 'FAQ',
        path: '/',
    }
]

export default function Header () {
    return (
    <HeaderWrapper>
        <Conteiner>
            <HeaderLink to='/'>
                <Logo></Logo>
                <Typography>Web-Movies</Typography> 
            </HeaderLink>
            <HeaderItem>
            {MOCK.map(({label, path}, index) => (
                <HeaderLink to={path} key={index}>
                     <Typography>{label}</Typography>
                </HeaderLink>
            ))}
            </HeaderItem>
            <HeaderIcons>
                <Search />
                <Favorites />
            </HeaderIcons>
        </Conteiner>
    </HeaderWrapper>

    )
}