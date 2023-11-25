// hooks
import { useEffect, useState } from 'react';
import { useMessage } from '../hooks/useMessage';
// context
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';
// components
import HoursForm from '../components/HoursForm';
import ResultTable from '../components/ResultTable';
import Filters from '../components/Filters';
import Cutoff from '../components/Cutoff';
import Totals from '../components/Totals';
// style
import styles from './styles/Home.module.css';
import Message from '../components/Message';


export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "hours",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );
  const { displayMessage, closeMessage, openMessage } = useMessage();

  const [filteredData, setFilteredData] = useState(documents);
  const [cutoffTime, setCutoffTime] = useState(0);

  useEffect(() => {
    setFilteredData(documents);
  }, [documents])

  useEffect(() => {
    closeMessage();
  }, [])

  return (
    <main>

      <section id="top-section" className={styles["top-section"]}>
        <HoursForm uid={user.uid} />
        {error && <Message closeMessage={closeMessage} type="error"><p>{error}</p></Message>}
      </section>

      <section id="result-section" className={styles["result-section"]}>
        {filteredData && (
          <>
            <Filters data={documents} setFilteredData={setFilteredData} />
            <div>
              <Cutoff cutoffTime={cutoffTime} setCutoffTime={setCutoffTime} />
              <ResultTable data={filteredData} cutoffTime={cutoffTime} />
              <Totals data={filteredData} cutoffTime={cutoffTime} />
            </div>
          </>
        )}
      </section>

    </main>
  )
}
