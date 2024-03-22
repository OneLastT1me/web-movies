import { Box,Stack, styled } from "@mui/material";

export const Content = styled(Box)({
    height: '235px',
    display: 'flex',
    
})

export const Poster = styled(Stack)({
  
  
    width: '150px',
    height: '100%',
})

export const Conteiner = styled(Box)({
    
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
})

export const Carusel = styled(Box)({
    transition: 'transform 0.5s ease',
    left: 0,
    display: 'flex',
    position: 'absolute',
    width: '100%',
    gap: '10px',
    
})