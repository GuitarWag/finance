import { Month, MonthReq } from 'services/types';
import { Meta, Metas } from 'store/ducks/spinner';
const NAMESPACE = 'months';

export interface Action {
  type:
    | 'months/GET_MONTHS_START'
    | 'months/GET_MONTHS_SUCCESS'
    | 'months/GET_MONTHS_ERROR'
    | 'months/ADD_MONTH_START'
    | 'months/ADD_MONTH_SUCCESS'
    | 'months/ADD_MONTH_ERROR'
    | 'months/DELETE_MONTH_START'
    | 'months/DELETE_MONTH_SUCCESS';
  payload?: any;
  meta?: Meta;
}
interface RootState {
  months: State;
}

interface State {
  loading: boolean;
  error: typeof undefined;
  list: [Month] | typeof undefined;
}

export const Types = {
  GET_MONTHS_START: 'months/GET_MONTHS_START',
  GET_MONTHS_SUCCESS: 'months/GET_MONTHS_SUCCESS',
  GET_MONTHS_ERROR: 'months/GET_MONTHS_ERROR',
  ADD_MONTH_START: 'months/ADD_MONTH_START',
  ADD_MONTH_SUCCESS: 'months/ADD_MONTH_SUCCESS',
  ADD_MONTH_ERROR: 'months/ADD_MONTH_ERROR',
  DELETE_MONTH_START: 'months/DELETE_MONTH_START',
  DELETE_MONTH_SUCCESS: 'months/DELETE_MONTH_SUCCESS',
  DELETE_MONTH_ERROR: 'months/DELETE_MONTH_ERROR',
};

const initialState = {
  loading: false,
  error: undefined,
  list: undefined,
};

export default (state: State = initialState, { type, payload }: Action) => {
  switch (type) {
    case Types.GET_MONTHS_START:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_MONTHS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
      };
    case Types.GET_MONTHS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.ADD_MONTH_START:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_MONTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.ADD_MONTH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.DELETE_MONTH_START:
      return {
        ...state,
        loading: true,
      };
    case Types.DELETE_MONTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case Types.DELETE_MONTH_ERROR:
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
  getMonthsStart: () => ({
    type: Types.GET_MONTHS_START,
    meta: Metas.showGlobalSpinnerMeta,
  }),
  getMonthsSuccess: (months: [Month]) => ({
    type: Types.GET_MONTHS_SUCCESS,
    payload: months,
  }),
  getMonthsError: (error: Error) => ({
    type: Types.GET_MONTHS_ERROR,
    payload: error,
  }),
  addMonthStart: (month: MonthReq) => ({
    type: Types.ADD_MONTH_START,
    payload: month,
    meta: Metas.showGlobalSpinnerMeta,
  }),
  addMonthSuccess: () => ({
    type: Types.ADD_MONTH_SUCCESS,
  }),
  addMonthError: (error: Error) => ({
    type: Types.ADD_MONTH_ERROR,
    payload: error,
  }),
  deleteMonthStart: () => ({
    type: Types.DELETE_MONTH_START,
    meta: Metas.showGlobalSpinnerMeta,
  }),
  deleteMonthSuccess: (month: MonthReq | null) => ({
    type: Types.DELETE_MONTH_SUCCESS,
    payload: month,
  }),
  deleteMonthError: (error: Error) => ({
    type: Types.DELETE_MONTH_ERROR,
    payload: error,
  }),
};

export const Selectors = {
  loading: (state: RootState) => state[NAMESPACE].loading,
  error: (state: RootState) => state[NAMESPACE].error,
  list: (state: RootState) => state[NAMESPACE].list,
};
