import { NavLink } from 'react-router-dom';
import css from './PagesStyle.module.css';

const Home = () => {
  return (
    <div className={css.Wrapper}>
      <h1 className={css.title}>Welcome to Phonebook!</h1>
      <p className={css.subTitle}>Please, Sign Up / Sign In to continue</p>
      <div className={css.linkContainer}>
        <NavLink to="/register" className={css.link}>
          Sign Up
        </NavLink>
        <NavLink to="/login" className={css.link}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};
export default Home;

