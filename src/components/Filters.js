// hooks
import { useState } from 'react';
import { useFilterData } from '../hooks/useFilterData';
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
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const { filteredDocuments } = useFilterData(data, name, startDate, endDate);

    const handleFilter = e => {
        e.preventDefault();
        setFilteredData(filteredDocuments)
    }

    return (
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

            <label htmlFor='start'>Start date:</label>
            <input
                type="date"
                name="start"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
            />

            <label htmlFor='end'>End date:</label>
            <input
                type="date"
                name="end"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
            />

            <button className={buttonStyles.filterBtn}>Filter</button>

        </form>
    )
}