import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { Invoice } from 'services/types';

const deleteInvoiceSubPath = (invoice: Invoice, currentUserId: string) => {
  return `/users/${currentUserId}/months/${invoice.relativeMonth}/${invoice.type}/${invoice.identifier}`;
};

function* deleteInvoice(invoice: Invoice, currentUserId: string) {
  yield axios.delete(
    `${BASE_PATH}${deleteInvoiceSubPath(
      invoice,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
  );
}
export default deleteInvoice;
