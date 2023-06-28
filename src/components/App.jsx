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
    >
    
    </div>
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

// import React from 'react';
// import { lazy, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchCurrentUser } from 'redux/auth/AuthOperations';
// import { getAuth } from 'redux/auth/AuthSlice';
// import  Layouts from './layouts/Layouts';
// import { PrivateRoute } from './routes/PrivateRoute';
// import { PublicRoute } from './routes/PublicRoute';
// import { Loader } from './loader/Loader';

// const Register = lazy(() => import('pages/Register'));
// const LogIn = lazy(() => import('pages/LogIn'));
// const Phonebook = lazy(() => import('./phonebook/Phonebook'));
// const PageNotFound = lazy(() => import('./pageNotFound/PageNotFound'));

// function App() {
//   const dispatch = useDispatch();
//   const { isLoadingUser } = useSelector(getAuth);

//   useEffect(() => {
//     dispatch(fetchCurrentUser());
//   }, [dispatch]);
//   return (
//     <>
//       {isLoadingUser ? (
//         <Loader />
//       ) : (
//         <Routes>
//           <Route path="/" element={<Layouts />}>
//             <Route
//               path="/register"
//               element={
//                 <PublicRoute>
//                   <Register />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               path="/login"
//               element={
//                 <PublicRoute>
//                   <LogIn />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               path="/contacts"
//               element={
//                 <PrivateRoute>
//                   <Phonebook />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="*" element={<PageNotFound />} />
//           </Route>
//         </Routes>
//       )}
//       <ToastContainer autoClose={2000} />
//     </>
//   );
// }

// export default App;

// import React from 'react';
// import ContactForm from './contactForm/ContactForm';
// import Filter from './filter/Filter';
// import ContactList from './contactList/ContactList';
// import { UserMenu } from './userMenu/UserMenu';
// import css from './App.module.css';

// const App = () => {
//   return (
//     <div>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.title}>Contacts</h2>
//       <Filter />
//       <ContactList />
//       <UserMenu />
//     </div>
//   );
// };

// export default App;
