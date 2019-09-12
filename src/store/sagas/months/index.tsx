import { put, takeLatest, select, delay } from 'redux-saga/effects';
import { orderBy } from 'lodash';
import {
  Types as MonthsTypes,
  Creators as MonthsCreators,
  Action as MonthAction,
} from 'store/ducks/months';
import { Selectors as LoggedUserSelectors } from 'store/ducks/logged-user';
import { Creators as CurrentMonthCreators } from 'store/ducks/current-month';

import { getMonths, addMonth } from 'services';
import transformMonths from './transformMonths';
export { default as transformMonths } from './transformMonths';
export { default as transformMonth } from './transformMonth';

export function* getMonthsStartAsync() {
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  const response = yield getMonths(currentUserId);
  const { data } = yield response;
  const payload = yield orderBy(
    transformMonths(data),
    ['dateOfCreation'],
    ['desc'],
  );

  yield put(MonthsCreators.getMonthsSuccess(payload));
  yield put(CurrentMonthCreators.setCurrentMonthSuccess(payload[0]));
}

export function* watchGetMonthsStart() {
  yield takeLatest(MonthsTypes.GET_MONTHS_START, getMonthsStartAsync);
}
export function* addMonthStartAsync(action: MonthAction) {
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  yield addMonth(action.payload, currentUserId);
  yield put(MonthsCreators.addMonthSuccess());
  yield delay(1000);
  yield put(MonthsCreators.getMonthsStart());
}

export function* watchAddMonthStart() {
  yield takeLatest(MonthsTypes.ADD_MONTH_START, addMonthStartAsync);
}
