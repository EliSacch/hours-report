// hooks
import { useState } from 'react';
import { useFilterData } from '../hooks/useFilterData';


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
        <form onSubmit={handleFilter}>
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

            <button>Filter</button>

        </form>
    )
}