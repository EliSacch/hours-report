// portal
import ReactDOM from 'react-dom';
// hooks
import { useEffect } from 'react';
// style
import styles from './styles/Modal.module.css';

export default function Modal({ children, handleClose, showModal }) {

    const handleKeyDown = (e) => {
        const modal = document.getElementById("modal");

        if (modal !== null & e.key.toLowerCase() == "tab") {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const target = e.target;
            const last = (focusableElements.length) - 1;

            focusableElements[0].focus();
            if (e.shiftKey) {
                if (target == focusableElements[0]) {
                    e.preventDefault();
                    focusableElements[last].focus();
                }
            } else {
                if (target == focusableElements[last]) {
                    e.preventDefault();
                    focusableElements[0].focus();
                }
            }
        }
    }

    useEffect(() => {
        if (showModal) {
            window.addEventListener("keydown", (e) => handleKeyDown(e));
        }
        // clean up function
        return () => window.removeEventListener("keydown", e => handleKeyDown(e));
    }, [])

    return ReactDOM.createPortal((
        <div className={styles.modalbackdrop}>
            <div className={styles.modal} id="modal">
                <button onClick={handleClose} className={styles.close}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                {children}
            </div>

        </div>
    ), document.body)
}
