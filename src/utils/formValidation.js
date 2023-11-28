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
        throw ("Time out time should be after Time in.");
    } else {
        return absDiff
    }
}


export function validate_start_end_date_fiter(start, end) {
    const diffDays = parseInt((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24), 10);
    if(diffDays < 0) {
        throw ('"End date" should be after "Start date"');
    }
    if(diffDays > 90) {
        throw ('Please, select a date range of 90 days max');
    }
}