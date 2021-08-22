import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InferType } from 'yup';
import { default as SignInFormSchema } from '../../pages/SignIn/SignInForm/schema';
import { default as SignUpFormSchema } from '../../pages/SignUp/SignUpForm/schema';
import { Index } from '../../types/Indexer';

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
  indexes: Array<Index>;
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
  indexes: [],
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
  extraReducers: {
    LOCATION_CHANGE: (state: UserState) => {
      return { ...state, status: { ...initialState.status, signedIn: state.status.signedIn } };
    },
  },
  reducers: {
    signInStart: (state: UserState, _action: PayloadAction<InferType<typeof SignInFormSchema>>) => {
      return { ...state, status: { ...state.status, loading: true } };
    },
    signInSuccess: (state: UserState, { payload }) => {
      return { ...state, information: payload, status: { ...state.status, loading: false, signedIn: true } };
    },
    signInFailure: (state: UserState, { payload }) => {
      return { ...state, status: { ...state.status, loading: false, error: true, errorMessage: payload } };
    },
    signUpStart: (state: UserState, _action: PayloadAction<InferType<typeof SignUpFormSchema>>) => {
      return { ...state, status: { ...state.status, loading: true } };
    },
    signUpSuccess: (state: UserState, { payload }) => {
      return { ...state, information: payload, status: { ...state.status, loading: false, signedIn: true } };
    },
    signUpFailure: (state: UserState, { payload }) => {
      return { ...state, status: { ...state.status, loading: false, error: true, errorMessage: payload } };
    },
    fetchIndexesStart: (state: UserState) => {
      return { ...state, status: { ...state.status, loading: true } };
    },
    fetchIndexesSuccess: (state: UserState, { payload }) => {
      return { ...state, indexes: payload, status: { ...state.status, loading: false } };
    },
    fetchIndexesFailure: (state: UserState, { payload }) => {
      return { ...state, status: { ...state.status, loading: false, error: true, errorMessage: payload } };
    },
    logOut: () => {
      return initialState;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  fetchIndexesStart,
  fetchIndexesSuccess,
  fetchIndexesFailure,
  logOut,
} = actions;
export default reducer;
