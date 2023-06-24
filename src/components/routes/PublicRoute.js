import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/AuthSlice';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getAuth);

  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};
