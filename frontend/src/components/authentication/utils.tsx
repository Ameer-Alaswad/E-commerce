import axios from "axios";
import { toast } from "react-toastify";
import {
    ERROR_OCCURRED_TEXT,
    ERROR_TEXT,
    NETWORK_ERROR_TEXT,
    SIGNIN_FAILED_MESSAGE,
    SIGNUP_FAILED_MESSAGE,
    UNKNOWN_ERROR_TEXT,
} from "../constants/errorMessages";
import { UserData } from "./types";



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
            toast.error(NETWORK_ERROR_TEXT + error.message);
        } else {
            toast.error(ERROR_TEXT + error.message);
        }
    } else {
        const errorMessage = (error as Error).message || UNKNOWN_ERROR_TEXT;
        toast.error(ERROR_OCCURRED_TEXT + errorMessage);
    }
};
