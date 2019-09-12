import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { Invoice } from 'services/types';

const editInvoiceSubPath = (invoice: Invoice, currentUserId: string) => {
  return `/users/${currentUserId}/months/${invoice.relativeMonth}/${invoice.type}/${invoice.identifier}/value`;
};
const editInvoicePaidSubPath = (invoice: Invoice, currentUserId: string) => {
  return `/users/${currentUserId}/months/${invoice.relativeMonth}/${invoice.type}/${invoice.identifier}/paid`;
};

function* editInvoice(
  invoice: Invoice,
  currentUserId: string,
  newValue: number,
) {
  yield axios
    .put(
      `${BASE_PATH}${editInvoiceSubPath(
        invoice,
        currentUserId,
      )}.json?auth=${databaseSecret}`,
      newValue,
    )
    .then(() =>
      axios.put(
        `${BASE_PATH}${editInvoicePaidSubPath(
          invoice,
          currentUserId,
        )}.json?auth=${databaseSecret}`,
        false,
      ),
    );
}
export default editInvoice;
