import { Navigate } from 'react-router-dom';
import { UseAuth } from 'components/hooks/UseAuth';
import { ProjectRoutes } from './ProjectRoutes';

export const PublicRoute = ({
  component: Component,
  redirectTo = ProjectRoutes.home,
}) => {
  const { isLoggedIn } = UseAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/auth/AuthSlice';

// export const PublicRoute = ({ children }) => {
//   const { isLoggedIn } = useSelector(getAuth);

//   return isLoggedIn ? <Navigate to="/contacts" /> : children;
// };
