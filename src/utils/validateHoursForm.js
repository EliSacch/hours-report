import { validate_in_out_time, validate_required_fields } from "./formValidation";

export const validateHoursForm = async form => {
    try {
        validate_required_fields([form.name, form.date, form['time-in'], form['time-out']]);
        const timeIn = form['time-in'].value.split(":").map(t => parseInt(t));
        const timeOut = form['time-out'].value.split(":").map(t => parseInt(t));
        const absDiff = validate_in_out_time(timeIn, timeOut);
        return absDiff
    } catch (err) {
        throw new Error(err)
    }
}