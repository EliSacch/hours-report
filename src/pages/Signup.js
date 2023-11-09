import { useState } from 'react';
import formStyles from './styles/Forms.module.css';
import btnStyles from './styles/Buttons.module.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, password2);
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
      
      <h2>Signup</h2>

      <div className={formStyles["form-input"]}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="password2">Repeat password:</label>
        <input
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
      </div>

      <button id="signup" className={btnStyles.btn}>Signup</button>

    </form>
  )
}
