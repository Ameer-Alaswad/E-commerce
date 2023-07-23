type UserData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string
};

export const getFormData = (form: EventTarget & HTMLFormElement): UserData => {
    const formData = new FormData(form);
    const { name, email, password, confirmPassword } = Object.fromEntries(
        formData.entries()
    ) as UserData;
    return { name, email, password, confirmPassword };
};
