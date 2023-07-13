import { useContext } from "react";
import { UserAuthContext } from "../../contexts/user-auth-context";

const useUserAuthContext = () => {
    const { userSignedIn, setUserSignedIn, handleSignOut } =
        useContext(UserAuthContext);

    return {
        userSignedIn,
        setUserSignedIn,
        handleSignOut,
    };
};

export default useUserAuthContext;
