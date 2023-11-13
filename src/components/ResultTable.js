// hooks
import { useFirestore } from '../hooks/useFirestore';
//styles
import styles from './styles/ResultTable.module.css';

export default function ResultTable({ data }) {
    const isThereData = data.length > 0;

    const { deleteDocument } = useFirestore('hours');

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
