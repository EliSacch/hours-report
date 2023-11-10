
// style
import { useEffect } from 'react';
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

    const closeModal = () => {
        window.removeEventListener("keydown", e => handleKeyDown(e));
        handleClose();
    }

    useEffect(() => {
        if (showModal) {
            window.addEventListener("keydown", (e) => handleKeyDown(e));
        }
        return window.removeEventListener("keydown", e => handleKeyDown(e));
    }, [])

    return (
        <div className={styles.modalbackdrop}>
            <div className={styles.modal} id="modal">
                <button onClick={() => closeModal()}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <button>Test</button>
                {children}
            </div>

        </div>
    )
}
