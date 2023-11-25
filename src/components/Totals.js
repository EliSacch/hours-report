// hooks
import { useEffect, useState } from "react";
import { calculate_total, calculated_partial } from "../utils/calculateHours";
// styles
import styles from "./styles/Totals.module.css";


export default function Totals({ data, cutoffTime }) {

    const [cutoff, setCutoff] = useState(parseInt(cutoffTime));

    const total = calculate_total(data.map(doc => doc.total.split(":")));
    const calculated_total = calculate_total(
        data.map(
            doc => calculated_partial(doc.total, cutoff).split(":")
            )
        )

    useEffect(() => {
        setCutoff(cutoffTime==="" ? 0 : parseInt(cutoffTime));
    }, [cutoffTime])

  return (
    <div className={styles.totals}>
      <p>Total: { total }</p>
      { cutoff!==0 && (
        <p>Calculated total: {calculated_total}</p>
      )}
    </div>
  )
}

