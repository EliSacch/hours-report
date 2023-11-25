// hooks
import { useEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';
// utils
import { calculated_partial } from '../utils/calculateHours';
//styles
import styles from './styles/ResultTable.module.css';

export default function ResultTable({ data, cutoffTime }) {
    const isThereData = data.length > 0;
    const { deleteDocument } = useFirestore('hours');

    const [cutoff, setCutoff] = useState(parseInt(cutoffTime));

    useEffect(() => {
        setCutoff(cutoffTime=="" ? 0 : parseInt(cutoffTime));
    }, [cutoffTime])

    return (
        <>
            {isThereData && (
                <div className={styles["table-container"]}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Descr.</th>
                                <th>Date</th>
                                <th>Time in</th>
                                <th>Time out</th>
                                <th>Total</th>
                                { cutoff!=0 && <th>Calculated</th>}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(
                                    doc => (
                                        <tr key={doc.id}>
                                            <td>{doc.name}</td>
                                            <td>{doc.description}</td>
                                            <td>{doc.date}</td>
                                            <td>{doc.timeIn}</td>
                                            <td>{doc.timeOut}</td>
                                            <td>{doc.total}</td>
                                            { cutoff!=0 && <td>{calculated_partial(doc.total, cutoff)}</td>}
                                            <td>
                                                <button onClick={() => deleteDocument(doc.id)} className={styles["material-symbols-outlined"]}>
                                                    <span className="material-symbols-outlined">
                                                        delete
                                                    </span>
                                        
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )


}
