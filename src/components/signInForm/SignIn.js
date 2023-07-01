import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginUser } from 'redux/auth/AuthOperations';
import css from 'components/signUpForm/SignUp.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.formTitle}>Login form</h1>
        <div className={css.formLabelWrapper}>
          <label className={css.formLabel}>
            <p className={css.formName}>Email:</p>
            <input className={css.formInput} type="email" name="email" />
          </label>
          <label className={css.formLabel}>
            <p className={css.formName}>Password:</p>
            <input className={css.formInput} type="password" name="password" />
          </label>
        </div>
        <button className={css.signUpBtn} type="submit">
          SIGN IN
        </button>
        <NavLink to="/" className={css.linkToHome}>
          Home
        </NavLink>
      </form>
    </>
  );
};

export default LoginForm;

