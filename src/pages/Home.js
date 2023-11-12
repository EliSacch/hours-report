// context
import { useAuthContext } from '../hooks/useAuthContext';
// components
import HoursForm from '../components/HoursForm';
// style
import styles from './styles/Home.module.css';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <main>

      <section id="top-section" className={styles["top-section"]}>
        <HoursForm uid={user.uid} />

        <div className={styles["big-screen"]}>
          <div className={styles["download-section"]}>
            <h2>Download</h2>
          </div>
        </div>

      </section>

      <section id="result-section" className={styles["result-section"]}>
        <div>
          <h2>Result</h2>
          
        </div>
      </section>

      <section className={styles["download-section"]}>
        <div className={styles["small-screen"]}>
          <h2>Download small</h2>
        </div>
      </section>


    </main>
  )
}
