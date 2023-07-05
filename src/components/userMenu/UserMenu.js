import React from 'react';
import { useDispatch } from 'react-redux';
import { UseAuth } from 'components/hooks/UseAuth';

import { logoutUser } from 'redux/auth/AuthOperations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { isLoggedIn, user } = UseAuth();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className={css.navWrapper}>
      {isLoggedIn ? (
        <div className={css.userWrapper}>
          <p className={css.welcomeName}>Welcome, ${user.name}!</p>
          <button
            type="button"
            className={css.userMenuBtn}
            onClick={onLogoutClick}
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};
