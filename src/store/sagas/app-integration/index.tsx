import { put, takeLatest, delay } from 'redux-saga/effects';
import {
  Types as AppIntegrationTypes,
  Creators as AppIntegrationCreators,
} from 'store/ducks/app-integration';
import { Creators as LoggedUserCreators } from 'store/ducks/logged-user';
import { Creators as MonthsCreators } from 'store/ducks/months';
import firebase from 'my-firebase';

export function* appStartAsync() {
  let myUser = null;
  yield firebase.auth().onAuthStateChanged(user => {
    myUser = user;
  });
  yield delay(3000);
  if (myUser !== null) {
    yield put(LoggedUserCreators.googleLoginSuccess(myUser));
    yield put(MonthsCreators.getMonthsStart());
  }
  yield put(AppIntegrationCreators.appStartSuccess());
}

export function* watchAppStart() {
  yield takeLatest(AppIntegrationTypes.APP_START, appStartAsync);
}
