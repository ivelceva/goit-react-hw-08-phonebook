import React from 'react';
import { useDispatch } from 'react-redux';
import { UseAuth } from 'components/hooks/UseAuth';
import { logoutUser } from 'redux/auth/AuthOperations';
import { useNavigate } from 'react-router-dom';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { isLoggedIn, user } = UseAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className={css.navWrapper}>
      {isLoggedIn && user ? (
        <div className={css.userWrapper}>
          <p className={css.welcomeName}>Welcome, {user.name}!</p>
          <button type="button" className={css.logOutBtn} onClick={onLogoutClick}>
            Log Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};

