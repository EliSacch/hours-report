import { useEffect, useState } from "react";

export const useFilterData = (data, name, startDate, endDate) => {

    //
    const [filteredDocuments, setFilteredDocuments] = useState(null);

    useEffect(() => {
        let result = data;
        if (name) {
            result = result.filter(doc => doc.name === name)
        }

        if (startDate) {
            result = result.filter(doc => doc.date >= startDate)
        }

        if (endDate) {
            result = result.filter(doc => doc.date <= endDate)
        }
        setFilteredDocuments(result);

    }, [data, name, startDate, endDate])

    return { filteredDocuments }

}