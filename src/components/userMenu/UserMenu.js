import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/AuthSlice';
import { logoutUser } from 'redux/auth/AuthOperations';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const { user, isLoggedIn } = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className={style.navWrapper}>
      {isLoggedIn ? (
        <div className={style.userWrapper}>
          <p className={style.welcomeName}>{`Welcome, ${user.name}!`}</p>
          <button
            type="button"
            className={style.button}
            onClick={onLogoutClick}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className={style.menuWrapper}>
          <NavLink to="/register" className={style.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={style.link}>
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};
