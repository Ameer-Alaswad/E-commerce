import { useState } from "react";
import {
    Box,
    Button,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import useProfileUpdate from "../../hooks/useProfileUpdate";
import useUserAuthContext from "../../hooks/context/useUserAuthContext";
import { formContainer, profileUpdateContainer, profileUpdateFormStyles, updateProfileButton } from "./styles";
import { UPDATE_PROFILE_MESSAGE } from "../constants/text";
import { PROFILE_UPDATE_FAILED_MESSAGE } from "../constants/errorMessages";
interface UserData {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}

const ProfileUpdate = () => {
    const { handleProfileUpdate } = useProfileUpdate();
    const UserDataStorage: string | null = localStorage.getItem("userData");
    const userData: UserData | null = UserDataStorage
        ? JSON.parse(UserDataStorage)
        : null;
    const { userSignedIn, setUserSignedIn } = useUserAuthContext();
    const {
        name: userName,
        token: userToken,
        email: userEmail,
    } = userSignedIn || {};

    const [name, setName] = useState<string | undefined>(
        userName || userData?.name
    );
    const [token] = useState<string | undefined>(userToken || userData?.token);
    const [email, setEmail] = useState<string | undefined>(
        userEmail || userData?.email
    );
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorMessage =
            password !== repeatPassword ? "Passwords must match!" : "";
        if (errorMessage) {
            return toast.error(errorMessage);
        }
        setIsLoading(true);
        try {
            const data = await handleProfileUpdate({ name, email, password, token });
            setUserSignedIn(data);
            localStorage.setItem("userData", JSON.stringify(data));
        } catch (error) {
            toast.error(PROFILE_UPDATE_FAILED_MESSAGE);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={ profileUpdateContainer }>
            <Box>
                <CssBaseline />
                <Box
                    sx={ formContainer }
                >
                    <Typography component="h1" variant="h4">
                        { UPDATE_PROFILE_MESSAGE }
                    </Typography>
                    <Box component="form" sx={ { mt: 1 } } onSubmit={ handleSubmit }>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Name"
                            name="Name"
                            autoFocus
                            value={ name }
                            sx={ profileUpdateFormStyles }
                            onChange={ (e) => setName(e.target.value) }
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            name="Email"
                            type="email"
                            autoComplete="current-password"
                            value={ email }
                            sx={ profileUpdateFormStyles }
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={ password }
                            sx={ profileUpdateFormStyles }
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Repeat Password"
                            name="repeat-password"
                            type="password"
                            value={ repeatPassword }
                            sx={ profileUpdateFormStyles }
                            onChange={ (e) => setRepeatPassword(e.target.value) }
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={ updateProfileButton }
                            disabled={ isLoading }
                        >
                            { isLoading ? "Updating..." : "Update" }
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfileUpdate;
