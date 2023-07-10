import useCustomLocation from '../../hooks/useCustomLocation';
import SearchIcon from "@mui/icons-material/Search";

import { SearchContainer, SearchIconWrapper, SearchInput } from "./MuiComponents";

const ProductSearch = () => {

    const { isHomePage } = useCustomLocation();


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