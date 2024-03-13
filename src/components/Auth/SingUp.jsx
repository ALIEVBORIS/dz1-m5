import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase.config';
import '../../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Password didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
      // console.log(user);
      setError('');
      setPassword('');
      setCopyPassword('');
    });
    // .catch((error) => console.log(error));
  };
  return (
    <div>
      <form onSubmit={register} className="form">
        <h2>Create an account</h2>
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
        <input
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button>Create</button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
        <span onClick={() => navigate('/singin')}>SingIn</span>
      </form>
    </div>
  );
};

export default SingUp;
