import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as InvoiceCreators } from '../index';
import { Invoice } from 'services/types';

export default () => {
  const dispatch = useDispatch();
  return useCallback(
    (invoice: Invoice, payWith: Invoice) => {
      dispatch(InvoiceCreators.payInvoiceStart(invoice, payWith));
    },
    [dispatch],
  );
};
