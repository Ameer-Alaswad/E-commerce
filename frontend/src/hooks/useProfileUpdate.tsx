import axios from 'axios';
import { toast } from 'react-toastify';
import { UserData } from '../contexts/app-context/Types';

interface ProfileUpdateData {
    name: string | undefined;
    email: string | undefined;
    password: string;
    token: string | undefined;
}

const useProfileUpdate = () => {
    const handleProfileUpdate = async (data: ProfileUpdateData): Promise<UserData> => {
        try {
            const response = await axios.put(
                '/api/users/profile',
                data,
                { headers: { Authorization: `Bearer ${data.token}` } }
            );
            const updatedUserData: UserData = response.data;
            toast.success('User updated successfully');
            return updatedUserData;
        } catch (error) {
            toast.error('User already exists!');
            throw error;
        }
    };

    return {
        handleProfileUpdate,
    };
};

export default useProfileUpdate;
