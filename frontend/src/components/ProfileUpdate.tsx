import { useState, useContext } from 'react';
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShoppingCartContext } from '../contexts/shopping-cart-context/shoppingCartContext';
interface UserData {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}
const ProfileUpdate = () => {
    const UserDataStorage: string | null = localStorage.getItem('userData');
    const userData: UserData | null = UserDataStorage ? JSON.parse(UserDataStorage) : null;
    const { userSignin, setUserSignin } = useContext(ShoppingCartContext);
    const { name: userName, token: userToken, email: userEmail } = userSignin || {};

    const [name, setName] = useState<string | undefined>(userName || userData?.name);
    const [token, setToken] = useState<string | undefined>(userToken || userData?.token);
    const [email, setEmail] = useState<string | undefined>(userEmail || userData?.email);
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorMessage = password !== repeatPassword ? 'Passwords must match!' : '';
        if (errorMessage) {
            return toast.error(errorMessage);
        }
        setIsLoading(true);
        try {
            const { data } = await axios.put(
                '/api/users/profile',
                { name, email, password },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setUserSignin(data);
            localStorage.setItem('userData', `${JSON.stringify(data)}`);
            toast.success('User updated successfully');
        } catch (error) {
            toast.error('User already exists!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={ { marginTop: '100px' } }>
            <CssBaseline />
            <Box>
                <Typography component="h1" variant="h5">
                    Update your Profile
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
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Repeat Password"
                        name="repeat-password"
                        type="password"
                        value={ repeatPassword }
                        onChange={ (e) => setRepeatPassword(e.target.value) }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={ { mt: 3, mb: 2 } }
                        disabled={ isLoading }
                    >
                        { isLoading ? 'Updating...' : 'Update' }
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfileUpdate;
