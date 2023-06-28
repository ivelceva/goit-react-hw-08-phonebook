import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/UseAuth';
import { Routes } from './Routes';

export const PublicRoute = ({
  component: Component,
  redirectTo = Routes.home,
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/auth/AuthSlice';

// export const PublicRoute = ({ children }) => {
//   const { isLoggedIn } = useSelector(getAuth);

//   return isLoggedIn ? <Navigate to="/contacts" /> : children;
// };
