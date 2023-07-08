import useCustomLocation from '../../hooks/useCustomLocation';
import SearchIcon from "@mui/icons-material/Search";

import { SearchContainer, SearchIconWrapper, SearchInput } from "./MuiComponents";
import { HOME_PATH } from '../constants';

const ProductSearch = () => {

    const location = useCustomLocation();
    const isHomePage = location.pathname === HOME_PATH;

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