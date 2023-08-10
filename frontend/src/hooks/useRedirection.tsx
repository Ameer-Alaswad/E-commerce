import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { captureRedirectionRoute } from "../utils/utils";
import useUserAuthContext from "../hooks/context/useUserAuthContext";
import useCustomLocation from "../hooks/useCustomLocation";

const useRedirectIfSignedIn = () => {
    const navigate = useNavigate();
    const { userSignedIn } = useUserAuthContext();
    const { search } = useCustomLocation();
    const capturedRedirect = captureRedirectionRoute(search);

    useEffect(() => {
        userSignedIn && navigate(capturedRedirect);
    }, [userSignedIn, navigate, capturedRedirect]);

};

export default useRedirectIfSignedIn
