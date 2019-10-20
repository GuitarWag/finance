import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { Invoice } from 'services/types';

const payInvoiceValueSubPath = (invoice: Invoice, currentUserId: string) => {
  return `/users/${currentUserId}/months/${invoice.relativeMonth}/${invoice.type}/${invoice.identifier}/value`;
};
const payInvoicePaidSubPath = (invoice: Invoice, currentUserId: string) => {
  return `/users/${currentUserId}/months/${invoice.relativeMonth}/${invoice.type}/${invoice.identifier}/paid`;
};

const editInvoiceSubPath = (invoice: Invoice, currentUserId: string) => {
  return `/users/${currentUserId}/months/${invoice.relativeMonth}/${invoice.type}/${invoice.identifier}/value`;
};
function* payInvoice(invoice: Invoice, currentUserId: string, payWith: Invoice) {
  const payWithNewValue = yield Number(Number(payWith.value) - Number(invoice.value));
  yield axios.put(
    `${BASE_PATH}${payInvoicePaidSubPath(
      invoice,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
    invoice.value,
  );
  yield axios.put(
    `${BASE_PATH}${payInvoiceValueSubPath(
      invoice,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
    0,
  );
  yield axios.put(
    `${BASE_PATH}${editInvoiceSubPath(
      payWith,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
    payWithNewValue,
  );
}
export default payInvoice;
