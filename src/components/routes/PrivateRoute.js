import { Navigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { UseAuth } from 'components/hooks/UseAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = UseAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// export const PrivateRoute = ({ children }) => {
//   const { isLoggedIn } = useSelector(getAuth);

//   return isLoggedIn ? children : <Navigate to="/login" />;
// };
