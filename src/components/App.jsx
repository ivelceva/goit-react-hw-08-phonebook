import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/AuthOperations';
import { useAuth } from './hooks/UseAuth';
import { Routes } from './routes/Routes';

const HomePage = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/LogIn'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    ></div>
  ) : (
    <Routes>
      <Route path={Routes.home} element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route
          path={Routes.register}
          element={
            <PublicRoute
              redirectTo={Routes.contacts}
              component={<Register />}
            />
          }
        />
        <Route
          path={Routes.login}
          element={
            <PublicRoute
              redirectTo={Routes.contacts}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path={Routes.contacts}
          element={
            <PrivateRoute
              redirectTo={Routes.login}
              component={<ContactsPage />}
            />
          }
        />
        <Route path={Routes.notFound} element={<Navigate to={Routes.home} />} />
      </Route>
    </Routes>
  );
};

export default App;

// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
// import { Layouts } from 'components/layouts/Layouts';
// import { refreshUser } from '../redux/auth/ope';
// //import { Home } from '../pages/Home';
// import { Register } from '../pages/Register';
// import { LogIn } from '../pages/LogIn';
// import { Contacts } from '../pages/Contacts';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { useAuth } from 'hooks';

// const Home = lazy(() => import('pages/Home'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layouts />}>
//         <Route index element={<Home />} />
//         <Route
//           path="register"
//           element={
//             <RestrictedRoute
//               redirectTo="/contacts"
//               component={<Register />}
//             />
//           }
//         />
//         <Route
//           path="login"
//           element={
//             <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
//           }
//         />
//         <Route
//           path="contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<Contacts />} />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };
