import { Navigate } from 'react-router-dom';
import { UseAuth } from 'components/hooks/UseAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = UseAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log('isLoggedIn', isLoggedIn);
  console.log('isRefreshing', isRefreshing);
  console.log('shouldRedirect', shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
