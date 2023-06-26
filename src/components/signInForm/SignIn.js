import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/AuthSlice';
import { loginUser } from 'redux/auth/AuthOperations';
import { Loader } from '../loader/Loader';
import css from '../signUpForm/SignUp.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
        setEmail('');
        setPassword('');
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginUser({ email: email, password: password }));
  };

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={emailId}>
        Email
      </label>
      <input
        id={emailId}
        type="email"
        name="userEmail"
        value={email}
        onChange={handleChange}
        required
        placeholder="Enter your Email"
      />
      <label className={css.label} htmlFor={passwordId}>
        Password
      </label>
      <input
        id={passwordId}
        type="password"
        name="userPassword"
        value={password}
        onChange={handleChange}
        required
        placeholder="Enter your Password"
      />
      {!isLoading ? <button type="submit">Log In</button> : <Loader />}
    </form>
  );
};

export default LoginForm;
