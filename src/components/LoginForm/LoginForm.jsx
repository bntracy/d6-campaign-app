import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="centering-div">
          <TextField
            label="Username"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div className="centering-div">
          <TextField
            label="Password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div className="centering-div">
        <Button variant="contained" type="submit" name="submit">Log In</Button>
      </div>
    </form>
  );
}

export default LoginForm;
