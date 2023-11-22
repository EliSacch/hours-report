export function calculate_actual_total(absDiff) {

    const hourDiff = Math.floor(absDiff / 60);
    const minDiff = absDiff % 60;

    // get result as string
    let actual = `${hourDiff}:${minDiff < 10 ? ("0" + minDiff) : minDiff}`;
    return actual
}


export function calculated_total(actual, cutoff) {

    const actualHours = parseInt(actual.split(":")[0])
    const actualMins = parseInt(actual.split(":")[1])

    return actualMins <= parseInt(cutoff) ? (
        actualHours < 10 ? `0${actualHours}:00` : `${actualHours}:00`
    ) : (
        actualHours+1 < 10 ? `0${actualHours+1}:00` : `${actualHours+1}:00`
    )
}
