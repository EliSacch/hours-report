import { useState } from 'react';
import formStyles from './styles/Forms.module.css';
import btnStyles from './styles/Buttons.module.css';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
      
      <h2>Login</h2>

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

      <button id="login" className={btnStyles.btn}>Login</button>

    </form>
  )
}
