import { Invoice, InvoiceReq } from 'services/types';
import { Metas } from '../spinner';

const NAMESPACE = 'invoices';

export interface Action {
  type:
    | 'invoices/EDIT_INVOICE_START'
    | 'invoices/EDIT_INVOICE_SUCCESS'
    | 'invoices/EDIT_INVOICE_ERROR'
    | 'invoices/PAY_INVOICE_START'
    | 'invoices/PAY_INVOICE_SUCCESS'
    | 'invoices/PAY_INVOICE_ERROR'
    | 'invoices/ADD_INVOICE_START'
    | 'invoices/ADD_INVOICE_SUCCESS'
    | 'invoices/ADD_INVOICE_ERROR'
    | 'invoices/DELETE_INVOICE_START'
    | 'invoices/DELETE_INVOICE_SUCCESS';
  payload?: any;
}
interface RootState {
  invoices: State;
}

interface State {
  loading: boolean;
  error: typeof undefined;
}

export const Types = {
  EDIT_INVOICE_START: 'invoices/EDIT_INVOICE_START',
  EDIT_INVOICE_SUCCESS: 'invoices/EDIT_INVOICE_SUCCESS',
  EDIT_INVOICE_ERROR: 'invoices/EDIT_INVOICE_ERROR',
  ADD_INVOICE_START: 'invoices/ADD_INVOICE_START',
  ADD_INVOICE_SUCCESS: 'invoices/ADD_INVOICE_SUCCESS',
  ADD_INVOICE_ERROR: 'invoices/ADD_INVOICE_ERROR',
  DELETE_INVOICE_START: 'invoices/DELETE_INVOICE_START',
  DELETE_INVOICE_SUCCESS: 'invoices/DELETE_INVOICE_SUCCESS',
  DELETE_INVOICE_ERROR: 'invoices/DELETE_INVOICE_ERROR',
  PAY_INVOICE_START: 'invoices/PAY_INVOICE_START',
  PAY_INVOICE_SUCCESS: 'invoices/PAY_INVOICE_SUCCESS',
  PAY_INVOICE_ERROR: 'invoices/PAY_INVOICE_ERROR',
};

const initialState = {
  loading: false,
  error: undefined,
};

export default (state: State = initialState, { type, payload }: Action) => {
  switch (type) {
    case Types.EDIT_INVOICE_START:
      return {
        ...state,
        loading: true,
      };
    case Types.EDIT_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.EDIT_INVOICE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.PAY_INVOICE_START:
      return {
        ...state,
        loading: true,
      };
    case Types.PAY_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.PAY_INVOICE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.ADD_INVOICE_START:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.ADD_INVOICE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.DELETE_INVOICE_START:
      return {
        ...state,
        loading: true,
      };
    case Types.DELETE_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.DELETE_INVOICE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const Creators = {
  addInvoiceStart: (invoice: InvoiceReq) => ({
    type: Types.ADD_INVOICE_START,
    payload: invoice,
    meta: Metas.showGlobalSpinnerMeta,
  }),
  addInvoiceSuccess: () => ({
    type: Types.ADD_INVOICE_SUCCESS,
  }),
  addInvoiceError: (error: Error) => ({
    type: Types.ADD_INVOICE_ERROR,
    payload: error,
  }),
  editInvoiceStart: (invoice: Invoice, newValue: number) => ({
    type: Types.EDIT_INVOICE_START,
    payload: {
      invoice,
      newValue,
    },
    meta: Metas.showGlobalSpinnerMeta,
  }),
  editInvoiceSuccess: () => ({
    type: Types.EDIT_INVOICE_SUCCESS,
  }),
  editInvoiceError: (error: Error) => ({
    type: Types.EDIT_INVOICE_ERROR,
    payload: error,
  }),
  payInvoiceStart: (invoice: Invoice, payWith: Invoice) => ({
    type: Types.PAY_INVOICE_START,
    payload: {
      invoice,
      payWith,
    },
    meta: Metas.showGlobalSpinnerMeta,
  }),
  payInvoiceSuccess: () => ({
    type: Types.PAY_INVOICE_SUCCESS,
  }),
  payInvoiceError: (error: Error) => ({
    type: Types.PAY_INVOICE_ERROR,
    payload: error,
  }),
  deleteInvoiceStart: (invoice: Invoice) => ({
    type: Types.DELETE_INVOICE_START,
    payload: invoice,
    meta: Metas.showGlobalSpinnerMeta,
  }),
  deleteInvoiceSuccess: () => ({
    type: Types.DELETE_INVOICE_SUCCESS,
  }),

  deleteInvoiceError: (error: Error) => ({
    type: Types.DELETE_INVOICE_ERROR,
    payload: error,
  }),
};

export const Selectors = {
  loading: (state: RootState) => state[NAMESPACE].loading,
  error: (state: RootState) => state[NAMESPACE].error,
};
