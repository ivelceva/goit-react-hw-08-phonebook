import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/userMenu/UserMenu';
//import { Loader } from '../loader/Loader';
import css from './Layouts.module.css';

const Layouts = () => {
  return (
    <div className={css.menuContainer}>
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layouts;
