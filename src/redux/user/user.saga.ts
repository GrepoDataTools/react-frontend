import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  signInFailure,
  signInStart,
  signInSuccess,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  fetchIndexesStart,
  fetchIndexesSuccess,
} from './user.reducer';
import { getIndexes, signIn, signUp } from '../../api/user';
import { InferType } from 'yup';
import { default as SignInFormSchema } from '../../pages/SignIn/SignInForm/schema';
import { default as SignUpFormSchema } from '../../pages/SignUp/SignUpForm/schema';
import { PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { history } from '../../utils/url.utils';
import { ErrorResponse } from '../../types/ErrorResponse';

function* signInSaga({ payload }: PayloadAction<InferType<typeof SignInFormSchema>>): SagaIterator<void> {
  try {
    const userTokens = yield call(signIn, payload.email, payload.password);
    const userData = yield jwtDecode<any>(userTokens.access_token);
    const data = {
      id: userData.uid,
      email: userData.mail,
      username: userData.username,
      isMailConfirmed: userData.mail_is_confirmed,
      isAccountLinked: userData.account_is_linked,
      tokenExpiration: userData.exp,
      accessToken: userTokens.access_token,
      refreshToken: userTokens.refresh_token,
      expiresIn: userTokens.expires_in,
    };

    yield put(signInSuccess(data));
    yield call(history.push, '/profile');
  } catch (e) {
    const errorMessage: string = ErrorResponse[`E${e.response?.data.error_code}` as keyof typeof ErrorResponse];
    yield put(signInFailure(errorMessage));
  }
}

function* signUpSaga({ payload }: PayloadAction<InferType<typeof SignUpFormSchema>>): SagaIterator<void> {
  try {
    const userTokens = yield call(signUp, payload.email, payload.username, payload.password);
    const userData = yield jwtDecode<any>(userTokens.access_token);
    const data = {
      id: userData.uid,
      email: userData.mail,
      username: userData.username,
      isMailConfirmed: userData.mail_is_confirmed,
      isAccountLinked: userData.account_is_linked,
      tokenExpiration: userData.exp,
      accessToken: userTokens.access_token,
      refreshToken: userTokens.refresh_token,
      expiresIn: userTokens.expires_in,
    };

    yield put(signUpSuccess(data));
    yield call(history.push, '/profile');
  } catch (e) {
    const errorMessage: string = ErrorResponse[`E${e.response?.data.error_code}` as keyof typeof ErrorResponse];
    yield put(signUpFailure(errorMessage));
  }
}

function* fetchIndexesSaga(): SagaIterator<void> {
  try {
    const { items } = yield call(getIndexes);

    yield put(fetchIndexesSuccess(items));
  } catch (e) {
    const errorMessage: string = ErrorResponse[`E${e.response?.data.error_code}` as keyof typeof ErrorResponse];
    yield put(signUpFailure(errorMessage));
  }
}

function* onSignInStart(): SagaIterator<void> {
  yield takeLatest(signInStart, signInSaga);
}

function* onSignUpStart(): SagaIterator<void> {
  yield takeLatest(signUpStart, signUpSaga);
}

function* onFetchIndexesStart(): SagaIterator<void> {
  yield takeLatest(fetchIndexesStart, fetchIndexesSaga);
}

export function* userSaga(): SagaIterator<void> {
  yield all([call(onSignInStart), call(onSignUpStart), call(onFetchIndexesStart)]);
}
