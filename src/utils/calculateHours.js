export function calculate_actual_partial(absDiff) {

    const hourDiff = Math.floor(absDiff / 60);
    const minDiff = absDiff % 60;

    // get result as string
    let actual = `${hourDiff}:${minDiff < 10 ? ("0" + minDiff) : minDiff}`;
    return actual
}


export function calculated_partial(actual, cutoff) {

    const actualHours = parseInt(actual.split(":")[0])
    const actualMins = parseInt(actual.split(":")[1])

    return actualMins <= parseInt(cutoff) ? (
        actualHours < 10 ? `0${actualHours}:00` : `${actualHours}:00`
    ) : (
        actualHours+1 < 10 ? `0${actualHours+1}:00` : `${actualHours+1}:00`
    )
}


export function calculate_total(partials) {

    if (partials.length !== 0) {
        let totalHours = partials.map(partial => parseInt(partial[0])).reduce(
            (a,b) => {
                a += b;
                return a
        })
        let totalMins = partials.map(partial => parseInt(partial[1])).reduce(
            (a,b) => {
                a += b;
                return a
        })
    
        if (totalMins%60 > 0) {
            totalHours+=(totalMins-totalMins%60)/60;
            totalMins=totalMins%60
        }
    
        return totalMins < 10 ? `${totalHours}:0${totalMins} h` : `${totalHours}:${totalMins} h`
    } else {
        return "0 h"
    }
}