import { Month } from 'services/types';
import { Metas } from 'store/ducks/spinner';
const NAMESPACE = 'currentMonth';

export interface Action {
  type:
    | 'currentMonth/SET_CURRENT_MONTH_START'
    | 'currentMonth/SET_CURRENT_MONTH_ERROR'
    | 'currentMonth/SET_CURRENT_MONTH_SUCCESS';
  payload?: any;
}
interface RootState {
  currentMonth: State;
}

interface State {
  loading: boolean;
  error: typeof undefined;
  month: Month | typeof undefined;
}

export const Types = {
  SET_CURRENT_MONTH_START: 'currentMonth/SET_CURRENT_MONTH_START',
  SET_CURRENT_MONTH_SUCCESS: 'currentMonth/SET_CURRENT_MONTH_SUCCESS',
  SET_CURRENT_MONTH_ERROR: 'currentMonth/SET_CURRENT_MONTH_ERROR',
};

const initialState = {
  loading: false,
  error: undefined,
  month: undefined,
};

export default (state: State = initialState, { type, payload }: Action) => {
  switch (type) {
    case Types.SET_CURRENT_MONTH_START:
      return {
        ...state,
        loading: true,
      };
    case Types.SET_CURRENT_MONTH_SUCCESS:
      return {
        ...state,
        loading: false,
        month: payload,
      };
    case Types.SET_CURRENT_MONTH_ERROR:
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
  setCurrentMonthStart: (month: Month) => ({
    type: Types.SET_CURRENT_MONTH_START,
    payload: month,
    meta: Metas.showGlobalSpinnerMeta,
  }),
  setCurrentMonthSuccess: (month: Month) => ({
    type: Types.SET_CURRENT_MONTH_SUCCESS,
    payload: month,
    meta: Metas.hideGlobalSpinnerMeta,
  }),
  setCurrentMonthError: (error: Error) => ({
    type: Types.SET_CURRENT_MONTH_ERROR,
    payload: error,
    meta: Metas.hideGlobalSpinnerMeta,
  }),
};

export const Selectors = {
  loading: (state: RootState) => state[NAMESPACE].loading,
  error: (state: RootState) => state[NAMESPACE].error,
  month: (state: RootState) => state[NAMESPACE].month,
};
