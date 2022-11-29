
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isPending} = useLogin();

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password)
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </label>
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn' disabled>loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}