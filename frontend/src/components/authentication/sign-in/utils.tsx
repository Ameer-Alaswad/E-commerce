type UserData = {
    email: string;
    password: string;
};

export const getFormData = (
    currentTarget: EventTarget & HTMLFormElement
): UserData => {
    const formData = new FormData(currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    return { email, password };
};
