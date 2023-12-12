// Login.js

import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';

function Login({ setIsLoginPage }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    pass: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  useEffect(() => {
    // Set isLoginPage to true when the Login component mounts
    setIsLoginPage(true);

    // Optionally, you can return a cleanup function to set isLoginPage to false when the component unmounts
    return () => {
      setIsLoginPage(false);
    };
  }, [setIsLoginPage]);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg('Fill in all fields');
      return;
    }

    setErrorMsg('');
    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(() => {
        setSubmitButtonDisabled(false);
        navigate('/home');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container1">
      <div className="innerBox">
        <h1>Login</h1>
        <InputControl
          label="Email"
          placeholder="Enter Email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className="footer">
          <b className="error">{errorMsg}</b>

          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Login
          </button>

          <p>
            Already have an account?{' '}
            <span>
              <Link to="/singup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
