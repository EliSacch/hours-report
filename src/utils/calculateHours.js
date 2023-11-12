export function calculate_actual_total(absDiff) {

    console.log("difference", absDiff);

    const hourDiff = Math.floor(absDiff / 60);
    const minDiff = absDiff % 60;

    // get result as string
    let actual = `${hourDiff}:${minDiff < 10 ? ("0" + minDiff) : minDiff}`;
    console.log(actual)

    return actual
}
