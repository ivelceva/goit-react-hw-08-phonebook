import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/userMenu/UserMenu';
import { Loader } from '../loader/Loader';
import css from './Layouts.module.css';

const Layouts = () => {
  return (
    <div className={css.menuContainer}>
      <h1 className={css.title}>Welcome to Phonebook!</h1>
      <p className={css.subTitle}>Please, Sign Up / Sign In to continue</p>
      <UserMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layouts;
