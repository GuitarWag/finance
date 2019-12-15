import { put, takeLatest, select, delay } from 'redux-saga/effects';
import {
  Action,
  Types as InvoicesTypes,
  Creators as InvoicesCreators,
} from 'store/ducks/invoices';
import { Creators as MonthsCreators } from 'store/ducks/months';
import {
  addInvoice,
  updateBalance,
  editInvoice,
  deleteInvoice,
} from 'services';
import { Selectors as LoggedUserSelectors } from 'store/ducks/logged-user';
import {
  Creators as CurrentMonthCreators,
  Selectors as CurrentMonthSelectors,
} from 'store/ducks/current-month';
import { Month } from 'services/types';
import payInvoice from '../../../services/invoices/payInvoice';

function* update(currentMonth: Month) {
  yield delay(250);
  yield put(MonthsCreators.getMonthsStart());
  yield delay(250);
  yield put(CurrentMonthCreators.setCurrentMonthStart(currentMonth));
}
export function* addInvoiceAsync(action: Action) {
  const currentMonth = yield select(CurrentMonthSelectors.month);
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  yield addInvoice(action.payload, currentUserId);
  yield updateBalance.onAdd(action.payload, currentUserId);
  yield delay(500);
  yield put(InvoicesCreators.addInvoiceSuccess());
  yield delay(250);
  yield put(MonthsCreators.getMonthsStart());
  yield delay(250);
  yield put(CurrentMonthCreators.setCurrentMonthStart(currentMonth));
}

export function* watchAddInvoiceStart() {
  yield takeLatest(InvoicesTypes.ADD_INVOICE_START, addInvoiceAsync);
}
export function* editInvoiceAsync(action: Action) {
  const { invoice, newValue } = action.payload;
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  const currentMonth = yield select(CurrentMonthSelectors.month);
  yield editInvoice(invoice, currentUserId, newValue);
  yield updateBalance.onEdit(invoice, currentUserId, newValue);
  yield delay(500);
  yield put(InvoicesCreators.editInvoiceSuccess());
  yield put(MonthsCreators.getMonthsStart());
  yield put(CurrentMonthCreators.setCurrentMonthStart(currentMonth));
}

export function* watchEditInvoiceStart() {
  yield takeLatest(InvoicesTypes.EDIT_INVOICE_START, editInvoiceAsync);
}
export function* payInvoiceAsync(action: Action) {
  const { invoice, payWith } = action.payload;
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  const currentMonth = yield select(CurrentMonthSelectors.month);
  yield payInvoice(invoice, currentUserId, payWith);
  yield updateBalance.onPay(invoice, currentUserId, payWith);
  yield delay(500);
  yield put(InvoicesCreators.payInvoiceSuccess());
  yield put(MonthsCreators.getMonthsStart());
  yield put(CurrentMonthCreators.setCurrentMonthStart(currentMonth));
}

export function* watchPayInvoiceStart() {
  yield takeLatest(InvoicesTypes.PAY_INVOICE_START, payInvoiceAsync);
}

export function* deleteInvoiceAsync(action: Action) {
  const currentUserId = yield select(LoggedUserSelectors.currentUserId);
  const currentMonth = yield select(CurrentMonthSelectors.month);
  yield deleteInvoice(action.payload, currentUserId);
  yield updateBalance.onDelete(action.payload, currentUserId);
  yield delay(500);
  yield put(InvoicesCreators.deleteInvoiceSuccess());
  yield update(currentMonth);
}

export function* watchDeleteInvoiceStart() {
  yield takeLatest(InvoicesTypes.DELETE_INVOICE_START, deleteInvoiceAsync);
}
