// hooks
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
// style
import formStyles from './styles/Forms.module.css';
import btnStyles from './styles/Buttons.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(e.target, email, password);
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>

      <h2>Login</h2>

      <div className={formStyles["form-input"]}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete='true'
        />
      </div>

      <div className={formStyles["form-input"]}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {!isPending && <button id="login" className={btnStyles.btn}>Login</button>}
      {isPending && <button className={btnStyles.btn} disabled>loading...</button>}
      {error && <p>{error}</p>}

    </form>
  )
}
