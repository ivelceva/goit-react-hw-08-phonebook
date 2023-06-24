import React from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/auth/AuthOperations';
import { getAuth } from 'redux/auth/AuthSlice';
import  Layouts from './layouts/Layouts';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { Loader } from './loader/Loader';

const SignUp = lazy(() =>
  import('../components/signUpForm/SignUp')
);

const SignIn = lazy(() =>
  import('../components/signInForm/SignIn')
);

const Phonebook = lazy(() => import('./phonebook/Phonebook'));

const PageNotFound = lazy(() =>
  import('./pageNotFound/PageNotFound')
);

function App() {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(getAuth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Phonebook />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;

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
