import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { signInFailure, signInStart, signInSuccess } from './user.reducer';
import { signIn } from '../../api/user';
import { InferType } from 'yup';
import schema from '../../pages/SignIn/SignInForm/schema';
import { PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { history } from '../../utils/url.utils';
import { ErrorResponse } from '../../types/ErrorResponse';

function* signInSaga({ payload }: PayloadAction<InferType<typeof schema>>): SagaIterator<void> {
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

function* onLogInStart(): SagaIterator<void> {
  yield takeLatest(signInStart, signInSaga);
}

export function* userSaga(): SagaIterator<void> {
  yield all([call(onLogInStart)]);
}
