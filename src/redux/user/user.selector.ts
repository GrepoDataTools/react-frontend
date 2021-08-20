import { State } from '../reducer';

export const isSignedIn = (state: State) => state.user.status.signedIn;

export const selectStatus = (state: State) => state.user.status;

export const selectUser = (state: State) => state.user.information;
