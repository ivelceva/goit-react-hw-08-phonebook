import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { registerUser, loginUser, logoutUser, fetchCurrentUser } from './AuthOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isLoadingUser: false,
  error: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      toast.success('Successfully registered!', {
        theme: 'dark',
      });
    },
    [registerUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something went wrong, try again!', {
        theme: 'dark',
      });
    },
    [loginUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      toast.success('Successfully logged in!', {
        theme: 'dark',
      });
    },
    [loginUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something went wrong, try again!', {
        theme: 'dark',
      });
    },
    [logoutUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
      toast.success('Successfully logged out! See you soon!', {
        theme: 'dark',
      });
    },
    [logoutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try again later!', {
        theme: 'dark',
      });
    },
    [fetchCurrentUser.pending](state) {
      state.isLoadingUser = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.isLoadingUser = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isLoadingUser = false;
      state.error = payload;
    },
  },
});

export const getAuth = (state) => state.auth.isLoading;


// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, fetchCurrentUser } from './operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   error: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [register.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [logIn.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [logOut.rejected](state, { payload }) {
//       state.error = payload;
//     },
//     [fetchCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;
//     },
//     [fetchCurrentUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [fetchCurrentUser.rejected](state) {
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;