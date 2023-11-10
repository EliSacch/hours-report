const validate_required_fields = fields => {
    for (let field of fields) {
        if (field.value === "") {
            throw new Error(`Field "${field.id}" is required`);
        }
    }
}

const validate_passwords_match = (pws1, psw2) => {
    if(pws1 !== psw2) {
        throw new Error("Passwords don't match");
    }
}

export const validateSignupForm = form => {
        validate_required_fields([form.email, form.password]);
        validate_passwords_match(form.password.value, form.password2.value);
}