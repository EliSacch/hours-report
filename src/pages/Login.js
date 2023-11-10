// hooks
import { useState } from 'react';
// style
import formStyles from './styles/Forms.module.css';
import btnStyles from './styles/Buttons.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>

      <h2>Login</h2>

      <div className={formStyles["form-input"]}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button id="login" className={btnStyles.btn}>Login</button>

    </form>
  )
}
