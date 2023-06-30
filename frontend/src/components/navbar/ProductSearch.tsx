import { useLocation } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";

import { SearchContainer, SearchIconWrapper, SearchInput } from "./MuiComponents";

const ProductSearch = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return isHomePage ? (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
                placeholder="Search…"
                inputProps={ { "aria-label": "search" } }
            />
        </SearchContainer>
    ) : null;
}

export default ProductSearch