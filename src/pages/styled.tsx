import { Box, styled } from "@mui/material";
import { theme } from "../Constants/theme";


export const Wrapper = styled(Box)({

    backgroundColor: theme.palette.common.black,
})

export const Conteiner = styled(Box)({
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: theme.palette.common.lightgrey,

    [theme.breakpoints.down('lg')]: {
        maxWidth: '1050px',
      },
    
      [theme.breakpoints.down('md')]: {
        maxWidth: '800px',
      },
})
