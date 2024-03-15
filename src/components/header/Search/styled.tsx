import styled from "@emotion/styled";
import { Box } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { theme } from "../../../Constants/theme";


export const SearchWrapper = styled(Box)(()=>({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    width: '26px',
    
    opacity: '0.5',
    borderRadius: '18px',
    padding: '4px 2px 0',

    '&:hover':{
        backgroundColor: theme.palette.common.lightgrey,
        width: '200px',
        transition: '0.7s',
        padding: '4px 8px 0',
    }
}))

export const StyledInputBase  = styled(InputBase)(()=>({
    height: '26px',
}))