import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/AuthOperations';
import { UseAuth } from './hooks/UseAuth';
import { ProjectRoutes } from './routes/ProjectRoutes';

const HomePage = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/LogIn'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = UseAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <b>Fetching user...</b>
  ) : (
    <Routes>
      <Route path={ProjectRoutes.home} element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route
          path={ProjectRoutes.register}
          element={
            <PublicRoute
              redirectTo={ProjectRoutes.contacts}
              component={<Register />}
            />
          }
        />
        <Route
          path={ProjectRoutes.login}
          element={
            <PublicRoute
              redirectTo={ProjectRoutes.contacts}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path={ProjectRoutes.contacts}
          element={
            <PrivateRoute
              redirectTo={ProjectRoutes.login}
              component={<ContactsPage />}
            />
          }
        />
        <Route
          path={Routes.notFound}
          element={<Navigate to={ProjectRoutes.home} />}
        />
      </Route>
    </Routes>
  );
};

export default App;










// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
// import Layouts from 'components/layouts/Layouts';
// import { fetchCurrentUser } from '../redux/auth/AuthOperations';
// //import { Home } from '../pages/Home';
// import Register from 'pages/Register';
// import LogIn from 'pages/LogIn';
// import Contacts from 'pages/Contacts';
// import { PublicRoute } from 'components/routes/PublicRoute';
// import { PrivateRoute } from 'components/routes/PrivateRoute';
// import { UseAuth } from 'components/hooks/UseAuth';

// const Home = lazy(() => import('pages/Home'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const { fetchCurrentUser } = UseAuth();

//     useEffect(() => {
//       dispatch(fetchCurrentUser());
//     }, [dispatch]);

//   return fetchCurrentUser ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layouts />}>
//         <Route index element={<Home />} />
//         <Route
//           path="register"
//           element={
//             <PublicRoute redirectTo="/contacts" component={<Register />} />
//           }
//         />
//         <Route
//           path="login"
//           element={<PublicRoute redirectTo="/contacts" component={<LogIn />} />}
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
