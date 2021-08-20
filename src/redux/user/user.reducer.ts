import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InferType } from 'yup';
import schema from '../../pages/SignIn/SignInForm/schema';

interface UserState {
  information: {
    id?: number;
    email?: string;
    username?: string;
    isMailConfirmed?: boolean;
    isAccountLinked?: boolean;
    tokenExpiration?: number;
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
  };
  status: {
    loading: boolean;
    signedIn: boolean;
    error: boolean;
    errorMessage?: string;
  };
}

const initialState: UserState = {
  information: {
    id: undefined,
    email: undefined,
    username: undefined,
    isMailConfirmed: undefined,
    isAccountLinked: undefined,
    tokenExpiration: undefined,
    accessToken: undefined,
    refreshToken: undefined,
    expiresIn: undefined,
  },
  status: {
    loading: false,
    signedIn: false,
    error: false,
    errorMessage: undefined,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state: UserState, _action: PayloadAction<InferType<typeof schema>>) => {
      return { ...state, status: { ...state.status, loading: true } };
    },
    signInSuccess: (state: UserState, { payload }) => {
      return { ...state, information: payload, status: { ...state.status, loading: false, signedIn: true } };
    },
    signInFailure: (state: UserState, { payload }) => {
      return { ...state, status: { ...state.status, loading: false, error: true, errorMessage: payload } };
    },
    logOut: () => {
      return initialState;
    },
  },
});

const { actions, reducer } = userSlice;
export const { signInStart, signInSuccess, signInFailure, logOut } = actions;
export default reducer;
