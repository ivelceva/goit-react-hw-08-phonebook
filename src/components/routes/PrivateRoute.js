import { Navigate } from 'react-router-dom';
import { UseAuth } from 'components/hooks/UseAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = UseAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  // return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;

};


