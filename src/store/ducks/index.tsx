import { combineReducers } from 'redux';
import appIntegration from './app-integration';
import loggedUser from './logged-user';
import months from './months';
import currentMonth from './current-month';
import invoices from './invoices';
import spinner from './spinner';
import language from './language';

export default combineReducers({
  appIntegration,
  loggedUser,
  months,
  currentMonth,
  invoices,
  spinner,
  language,
});
