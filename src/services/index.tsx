export { databaseSecret } from 'firebaseConfig';
export const BASE_PATH: string = 'https://finance-a7a60.firebaseio.com/';

export { default as getMonths } from './months/getMonths';
export { default as getSpecificMonth } from './months/getSpecificMonth';
export { default as addMonth } from './months/addMonth';
export { default as deleteMonth } from './months/deleteMonth';
export { default as addInvoice } from './invoices/addInvoice';
export { default as editInvoice } from './invoices/editInvoice';
export { default as updateBalance } from './invoices/updateBalance';
export { default as deleteInvoice } from './invoices/deleteInvoice';
