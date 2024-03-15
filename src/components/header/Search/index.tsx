import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { SearchWrapper, StyledInputBase } from "./styled";

export default function Search () {
    return(
        <SearchWrapper>
            <Box>
                <SearchIcon />
            </Box>
            <StyledInputBase  placeholder="Search…"/>
        </SearchWrapper>
    )
} 