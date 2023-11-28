// hooks
import { useEffect, useState } from 'react';
import { useFilterData } from '../hooks/useFilterData';
import { useMessage } from '../hooks/useMessage';
// utils
import { validate_start_end_date_fiter } from '../utils/formValidation';
// componenets
import Message from './Message';
// style
import formStyles from '../pages/styles/Forms.module.css';
import buttonStyles from '../pages/styles/Buttons.module.css';




export default function Filters({ data, setFilteredData }) {
    const names = data.map(
        doc => doc.name
    ).reduce(
        (a, b) => {
            if (a.indexOf(b) < 0) {
                a.push(b)
            }
            return a
        }, []
    );

    const today = new Date();
    const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(sevenDaysAgo.toISOString().split('T')[0]);
    const [endDate, setEndDate] = useState(today.toISOString().split('T')[0]);
    const [error, setError] = useState(null)

    const { filteredDocuments } = useFilterData(data, name, startDate, endDate);
    const { displayMessage, closeMessage, openMessage } = useMessage();

    const handleFilter = async e => {
        e.preventDefault();
        await setError(null);
       
        try {
            validate_start_end_date_fiter(e.target.start.value, e.target.end.value);
            setFilteredData(filteredDocuments);
        } catch (err) {
            setError(err);
        }
    }

    useEffect(() => {
        if (error) {
            openMessage();
        }
    }, [error])

    useEffect(() => {
        closeMessage();
    }, [])

    return (
        <>
            <form onSubmit={handleFilter} className={formStyles.filtersForm}>
                <div className={formStyles["form-line"]}>
                    <div className={formStyles["form-input"]}>
                        <label htmlFor='name'>Filter by name:</label>
                        <select
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        >
                            <option value={""} key={0}>ALL</option>
                            {
                                names.map(
                                    name => <option value={name} key={name}>{name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>

                <div className={formStyles["form-line"]}>
                    <div className={formStyles["form-input"]}>
                        <label htmlFor='start'>Start date:</label>
                        <input
                            type="date"
                            name="start"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </div>

                    <div className={formStyles["form-input"]}>
                        <label htmlFor='end'>End date:</label>
                        <input
                            type="date"
                            name="end"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                        />
                    </div>
                </div>

                <button className={buttonStyles.filterBtn}>Filter</button>

            </form>
            {displayMessage && (
                <Message displayMessage={displayMessage} closeMessage={closeMessage} type={error ? "error" : "success"}>
                    <p>{error}</p>
                </Message>
            )}
        </>
    )
}