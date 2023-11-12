function validate_required_fields(fields) {
    for (let field of fields) {
        if (field.value === "") {
            throw new Error(`Field "${field.id}" is required`);
        }
    }
}

function validate_passwords_match(pws1, psw2) {
    if (pws1 !== psw2) {
        throw new Error("Passwords don't match");
    }
}

export const validateSignInUpForm = async form => {
    try {
        validate_required_fields([form.email, form.password]);
        let all_fields = []
        for (let field of form) {
            all_fields.push(field.name);
        }
        if (all_fields.includes("password2")) {
            validate_passwords_match(form.password.value, form.password2.value)
        }
        return
    } catch (err) {
        throw new Error(err)
    }
}

