import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase.config';
import '../../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // console.log(user);
        setError('');
        setPassword('');
      })
      .catch(() => {
        // console.log(error);
        setError('Not Account');
      });
  };
  return (
    <div>
      <form className="form">
        <h2>Log in an account</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={logIn}>LogIn</button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
        <span onClick={() => navigate('/')}>SingUp</span>
      </form>
    </div>
  );
};

export default SingIn;
