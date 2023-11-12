// context
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';
// components
import HoursForm from '../components/HoursForm';
import ResultTable from '../components/ResultTable';
// style
import styles from './styles/Home.module.css';


export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "hours",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
    );

  return (
    <main>

      <section id="top-section" className={styles["top-section"]}>
        <HoursForm uid={user.uid} />
        {error && <p>{error}</p>}
      </section>

      <section id="result-section" className={styles["result-section"]}>
        {documents && <ResultTable data={documents} />}
      </section>

    </main>
  )
}
