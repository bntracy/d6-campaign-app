import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div className="centering-div">
          <TextField label="Username"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div className="centering-div">
          <TextField label="Password"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div className="centering-div">
        <Button variant="contained" type="submit" name="submit">Register</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
