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
import { UserRegistrationFormData } from "./types";

export const getFormData = (
    form: EventTarget & HTMLFormElement
): UserRegistrationFormData => {
    const formData = new FormData(form);
    const { name, email, password, confirmPassword } = Object.fromEntries(
        formData.entries()
    ) as UserRegistrationFormData;
    return { name, email, password, confirmPassword };
};

export const handleAxiosErrorMessages = (error: unknown, postType: string) => {
    if (axios.isAxiosError(error)) {
        const { message: errorMessage, response, request } = error;
        if (response) {
            toast.error(
                (postType === "signup"
                    ? SIGNUP_FAILED_MESSAGE
                    : SIGNIN_FAILED_MESSAGE) + response.data.message
            );
        } else if (request) {
            toast.error(NETWORK_ERROR_TEXT + errorMessage);
        } else {
            toast.error(ERROR_TEXT + errorMessage);
        }
    } else {
        const errorText = (error as Error).message || UNKNOWN_ERROR_TEXT;
        toast.error(ERROR_OCCURRED_TEXT + errorText);
    }
};
