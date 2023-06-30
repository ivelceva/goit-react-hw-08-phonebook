import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/AuthSlice';
import { logoutUser } from 'redux/auth/AuthOperations';
import { useNavigate } from 'react-router-dom';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user, isLoggedIn } = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className={css.navWrapper}>
      {isLoggedIn ? (
        <div className={css.userWrapper}>
          <p className={css.welcomeName}>Welcome, ${user.name}!</p>
          <button type="button" className={css.button} onClick={onLogoutClick}>
            Log Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAuth } from 'redux/auth/AuthSlice';
// import { logoutUser } from 'redux/auth/AuthOperations';
// import { NavLink, useNavigate } from 'react-router-dom';
// import css from './UserMenu.module.css';

// export const UserMenu = () => {
//   const { user, isLoggedIn } = useSelector(getAuth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onLogoutClick = () => {
//     dispatch(logoutUser());
//     navigate('/login');
//   };

//   return (
//     <nav className={css.navWrapper}>
//       {isLoggedIn ? (
//         <div className={css.userWrapper}>
//           <p className={css.welcomeName}>{`Welcome, ${user.name}!`}</p>
//           <button
//             type="button"
//             className={css.button}
//             onClick={onLogoutClick}
//           >
//             Log Out
//           </button>
//         </div>
//       ) : (
//         <div className={css.menuWrapper}>
//           <NavLink to="/register" className={css.link}>
//             Sign Up
//           </NavLink>
//           <NavLink to="/login" className={css.link}>
//             Sign In
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// };
