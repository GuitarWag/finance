import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as InvoiceCreators } from '../index';
import { InvoiceReq } from 'services/types';

export default () => {
  const dispatch = useDispatch();
  return useCallback(
    (invoiceReq: InvoiceReq) => {
      dispatch(InvoiceCreators.addInvoiceStart(invoiceReq));
    },
    [dispatch],
  );
};
