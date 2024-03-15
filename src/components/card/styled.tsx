import { Stack , styled } from "@mui/material";
import { theme } from "../../Constants/theme";


export const Conteiner = styled(Stack)({
        width: '196px',
        height: '366px',
        cursor: 'pointer',
        padding: '10px 10px 0',
        margin: '20px',
        borderBottom: '1px solid',
        justifyContent: 'space-between',
    
        ':hover': {
            borderLeft: '1px solid',
            boxShadow: `10px 10px 5px ${theme.palette.common.lightgrey}`
        },
})