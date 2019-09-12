import axios from 'axios';
import { BASE_PATH, databaseSecret } from 'services';
import { InvoiceReq } from 'services/types';

const addTransationSubPath = (
  invoiceReq: InvoiceReq,
  currentUserId: string,
) => {
  return `/users/${currentUserId}/months/${invoiceReq.relativeMonth}/${invoiceReq.type}`;
};

export default (invoiceReq: InvoiceReq, currentUserId: string) => {
  axios.post(
    `${BASE_PATH}${addTransationSubPath(
      invoiceReq,
      currentUserId,
    )}.json?auth=${databaseSecret}`,
    invoiceReq,
  );
};
