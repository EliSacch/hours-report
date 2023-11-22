// hooks
import { useEffect, useState } from 'react';
// context
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';
// components
import HoursForm from '../components/HoursForm';
import ResultTable from '../components/ResultTable';
// style
import styles from './styles/Home.module.css';
import Filters from '../components/Filters';
import Cutoff from '../components/Cutoff';



export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "hours",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
    );

  const [filteredData, setFilteredData] = useState(documents);
  const [cutoffTime, setCutoffTime] = useState(0);
 
  useEffect(() => {
    setFilteredData(documents);
  }, [documents])

  useEffect(() => {
    console.log(cutoffTime)
}, [cutoffTime])

  return (
    <main>

      <section id="top-section" className={styles["top-section"]}>
        <HoursForm uid={user.uid} />
        {error && <p>{error}</p>}
      </section>

      <section id="result-section" className={styles["result-section"]}>
        {filteredData && <Filters data={documents} setFilteredData={setFilteredData} />}
        {filteredData && <Cutoff cutoffTime={cutoffTime} setCutoffTime={setCutoffTime}/> }
        {filteredData && <ResultTable data={filteredData} cutoffTime={cutoffTime} />}
      </section>

    </main>
  )
}
