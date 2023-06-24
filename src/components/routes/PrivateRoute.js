import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/AuthSlice';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getAuth);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
