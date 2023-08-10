import axios from "axios";
import { toast } from "react-toastify";
import {
    SIGNIN_FAILED_MESSAGE,
    SIGNUP_FAILED_MESSAGE,
} from "../constants/errorMessages";
type UserData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const getFormData = (form: EventTarget & HTMLFormElement): UserData => {
    const formData = new FormData(form);
    const { name, email, password, confirmPassword } = Object.fromEntries(
        formData.entries()
    ) as UserData;
    return { name, email, password, confirmPassword };
};

export const handleAxiosErrorMessages = (error: unknown, postType: string) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            toast.error(
                (postType === "signup"
                    ? SIGNUP_FAILED_MESSAGE
                    : SIGNIN_FAILED_MESSAGE) + error.response.data.message
            );
        } else if (error.request) {
            toast.error("Network error: " + error.message);
        } else {
            toast.error("Error: " + error.message);
        }
    } else {
        const errorMessage = (error as Error).message || "Unknown error";
        toast.error("Error occurred: " + errorMessage);
    }
};
