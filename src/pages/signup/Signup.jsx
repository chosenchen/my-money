import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, isPending, error} = useSignup();

  const handleSubmit=(e) => {
    e.preventDefault();
    console.log(displayName, email, password);
    signup(email, password, displayName);
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>name:</span>
        <input 
          type="displayName" 
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        <span>email:</span>
        <input 
          type="eamil" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isPending && <button className='btn'>Signup</button>}
      {isPending && <button className='btn' disabled>loading</button>}
      { error && <p>{error}</p>}
    </form>
  )
}