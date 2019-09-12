import { all } from 'redux-saga/effects';
import { watchAppStart } from './app-integration';
import {
  watchGoogleLoginStart,
  watchFacebookLoginStart,
  watchLogoutStart,
} from './logged-user';
import { watchGetMonthsStart, watchAddMonthStart } from './months';
import { watchSetCurrentMonthStart } from './current-month';
import {
  watchAddInvoiceStart,
  watchEditInvoiceStart,
  watchDeleteInvoiceStart,
  watchPayInvoiceStart,
} from './invoices';

// !!!!!!!!!! ADD SAGA HERE TO WORK !!!!!!!!!!!!!!!!
export default function* rootSaga() {
  yield all([
    watchAppStart(),
    watchGoogleLoginStart(),
    watchFacebookLoginStart(),
    watchLogoutStart(),
    watchGetMonthsStart(),
    watchAddMonthStart(),
    watchSetCurrentMonthStart(),
    watchAddInvoiceStart(),
    watchEditInvoiceStart(),
    watchDeleteInvoiceStart(),
    watchPayInvoiceStart(),
  ]);
}
