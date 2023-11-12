// hooks
import { useState } from "react";
// style
import formStyles from '../pages/styles/Forms.module.css';
import btnStyles from '../pages/styles/Buttons.module.css';

export default function HoursForm() {
    const currentDate = new Date();
    const today = currentDate.toISOString().split('T')[0]

    const [name, setName] = useState("");
    const [date, setDate] = useState(today);
    const [timeIn, setTimeIn] = useState(`${currentDate.getHours()}:00`);
    const [timeOut, setTimeOut] = useState(`${currentDate.getHours() + 1}:00`);

    const handleSubmit = e => {
        e.preventDefault();
        console.log({
            name,
            date,
            timeIn,
            timeOut
        })
    }

    return (
        <div>
            <h2>Enter data</h2>
            <form onSubmit={handleSubmit} className={formStyles.form}>
                <div className={formStyles["form-line"]}>
                    <div className={formStyles["form-input"]}>
                        <label htmlFor="name">Student Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                </div>

                <div className={formStyles["form-line"]}>
                <div className={formStyles["form-input"]}>
                        <label htmlFor="date">Date:</label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>
                </div>

                <div className={formStyles["form-line"]}>
                    <div className={formStyles["form-input"]}>
                        <label htmlFor="time-in">Time In:</label>
                        <input
                            id="time-in"
                            type="time"
                            name="time-in"
                            onChange={(e) => setTimeIn(e.target.value)}
                            value={timeIn}
                        />
                    </div>
                    <div className={formStyles["form-input"]}>
                        <label htmlFor="time-out">Time out:</label>
                        <input
                            id="time-out"
                            type="time"
                            name="time-out"
                            onChange={(e) => setTimeOut(e.target.value)}
                            value={timeOut}
                        />
                    </div>
                </div>

                <button id="add" className={btnStyles.btn} tabIndex={0}>Add</button>

            </form>
        </div>
    )
}
