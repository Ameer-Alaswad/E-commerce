import { useLocation } from 'react-router-dom';
import { captureRedirectionRoute } from '../utils/utils';

const useRedirectionRoute = () => {
    const { search } = useLocation();
    const redirectionRoute = captureRedirectionRoute(search);

    return redirectionRoute
}

export default useRedirectionRoute