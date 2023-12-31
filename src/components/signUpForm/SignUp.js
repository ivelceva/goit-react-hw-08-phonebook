import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUser } from 'redux/auth/AuthOperations';
import css from './SignUp.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1 className={css.formTitle}>Registration form</h1>
      <div className={css.formLabelWrapper}>
        <label className={css.formLabel}>
          <p className={css.formName}>Username: </p>
          <input className={css.formInput} type="text" name="name" required />
        </label>
        <label className={css.formLabel}>
          <p className={css.formName}>Email: </p>
          <input className={css.formInput} type="email" name="email" required />
        </label>
        <label className={css.formLabel}>
          <p className={css.formName}>Password: </p>
          <input
            className={css.formInput}
            type="password"
            name="password"
            required
          />
        </label>
      </div>
      <button className={css.signUpBtn} type="submit">
        SIGN UP
      </button>
      <p className={css.linkToSignIn}>
        Already have an account?
        <NavLink to="/login" className={css.linkToHome}>
          Sign In
        </NavLink>
      </p>
    </form>
  );
};

export default RegisterForm;
