import { Box, keyframes, styled } from "@mui/material";
import { theme } from "../../Constants/theme";

const myEffect = keyframes`
  0% {
    opacity: 0;
    
  }
  100% {
    opacity: 1;
    
  }
`;

export const Content = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: '5px',
    animation: `${myEffect} 2000ms`,


    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr ',
    },

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
   
})

export const PaginationWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',

})