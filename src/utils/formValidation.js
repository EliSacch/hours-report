export function validate_required_fields(fields) {
    for (let field of fields) {
        if (field.value === "") {
            throw new Error(`Field "${field.id}" is required`);
        }
    }
}


export function validate_passwords_match(pws1, psw2) {
    if (pws1 !== psw2) {
        throw new Error("Passwords don't match");
    }
}


export function validate_in_out_time(In, Out) {
    // calculate difference
    const absDiff = ((Out[0] * 60) + Out[1]) - ((In[0] * 60) + In[1]);
    
    if (absDiff < 0) {
        throw ("Time out time should be after Time in.")
    }
}