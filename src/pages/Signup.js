// hooks
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
// style
import formStyles from './styles/Forms.module.css';
import btnStyles from './styles/Buttons.module.css';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(e.target, email, password, displayName);
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>

      <h2>Signup</h2>

      <div className={formStyles["form-input"]}>
        <label htmlFor="displayName">Display Name:</label>
        <input
          id="displayName"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="password2">Repeat password:</label>
        <input
          id="password2"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
      </div>
      {!isPending && <button id="signup" className={btnStyles.btn}>Signup</button>}
      {isPending && <button className={btnStyles.btn} disabled>loading...</button>}
      {error && <p>{error}</p>}

    </form>
  )
}
