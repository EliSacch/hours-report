// hooks
import { useEffect, useState } from "react";
// styles
import styles from "./styles/Cutoff.module.css";

export default function Cutoff({ cutoffTime, setCutoffTime }) {

    const [error, setError] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false)

    let acceptedValues = []
    for (let i = 0; i < 60; i++) {
        acceptedValues.push(String(i));
    }

    const handleCutoff = e => {
        e.preventDefault();
        setError(null);
        const mins = e.target.value;

        if (acceptedValues.includes(mins) || mins == "") {
            setCutoffTime(e.target.value);
        } else {
            setError("*Please, enter a whole number between 0 and 59")
        }
    }

    useEffect(() => {
        setError(null);
        console.log("here", cutoffTime)
        //document.getElementsByName("cutoff").value = cutoffTime;
        setHasLoaded(true)
        return setError(null);
    }, [])

    return (
        hasLoaded && (
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <label htmlFor='cutoff'>Set cut-off time: </label>
                <input
                    type="number"
                    name="cutoff"
                    onChange={e => handleCutoff(e)}
                    value={cutoffTime}
                />
                <span> min.</span>

                {error && <span className={styles.cutoffError}>{error}</span>}
            </form>
        )
    )
}
