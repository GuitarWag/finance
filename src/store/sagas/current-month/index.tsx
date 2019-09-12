import { put, takeLatest, select } from 'redux-saga/effects';
import {
  Creators as CurrentMonthsCreators,
  Types as CurrentMonthsTypes,
  Action,
} from 'store/ducks/current-month';
import { Selectors as LoggedUserSelectors } from 'store/ducks/logged-user';
import { getSpecificMonth } from 'services';
import { transformMonth } from '../months';

export function* setCurrentMonthAsync(action: Action) {
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  const { data } = yield getSpecificMonth(currentUserId, action.payload);
  const payload = transformMonth(data, action.payload.identifier);
  yield put(CurrentMonthsCreators.setCurrentMonthSuccess(payload));
}
export function* watchSetCurrentMonthStart() {
  yield takeLatest(
    CurrentMonthsTypes.SET_CURRENT_MONTH_START,
    setCurrentMonthAsync,
  );
}
