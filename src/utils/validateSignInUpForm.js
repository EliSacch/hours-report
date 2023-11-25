import { validate_passwords_match, validate_required_fields } from "./formValidation";


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
