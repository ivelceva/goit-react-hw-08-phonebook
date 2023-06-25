import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/AuthSlice';
import { registerUser } from 'redux/auth/AuthOperations';
import { Loader } from '../loader/Loader';
import css from './SignUp.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setName(value);
        break;
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registerUser({ name: name, email: email, password: password }));
  };

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameId}>
        Name
      </label>
      <input
        id={nameId}
        type="text"
        name="userName"
        value={name}
        onChange={handleChange}
        required
        placeholder="Choose your Name"
        className={css.input}
      />
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
        placeholder="Choose your Email"
        className={css.input}
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
        placeholder="Choose your Password"
        className={css.input}
      />
      {!isLoading ? (
        <button className={css.button} type="submit">
          Sign Up
        </button>
      ) : (
        <Loader />
      )}
    </form>
  );
};
export default RegisterForm;
