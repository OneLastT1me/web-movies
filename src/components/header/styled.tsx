import { styled, Box } from "@mui/material";
import {Link} from "react-router-dom"
import { theme } from "../../Constants/theme";

export const HeaderWrapper = styled(Box)(() => ({
    height: '80px',
    backgroundColor: theme.palette.common.grey
}))

export const Conteiner = styled(Box)(() =>({
    padding: '22px 160px 0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export const HeaderLink = styled(Link)(()=>({
    alignItems: 'center',
    display: 'flex',
    gap: '5px',
    color: theme.palette.common.black,
    textDecoration: 'none',
}))

export const HeaderItem =  styled(Box)(()=>({
    display: 'flex',
    gap: '15px',
}))

export const HeaderIcons = styled(Box)(()=> ({
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    justifyContent: 'center',
}))

