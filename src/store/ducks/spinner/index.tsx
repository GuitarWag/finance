const NAMESPACE = 'spinner';
export interface Meta {
  showGlobalSpinner: boolean | undefined;
}
interface Actions {
  type: any;
  payload?: any | undefined;
  meta?: Meta | undefined;
}
interface RootState {
  spinner: State;
}

interface State {
  globalSpinner: boolean;
  counter: number;
}
const initialState = {
  globalSpinner: false,
  counter: 0,
};

export default (state: State = initialState, { meta }: Actions) => {
  if (state.counter > 0) {
    return state;
  }
  if (meta && meta.showGlobalSpinner) {
    return { ...state, globalSpinner: true };
  }
  return { ...initialState };
};
export const Metas = {
  showGlobalSpinnerMeta: {
    showGlobalSpinner: true,
  },
  hideGlobalSpinnerMeta: {
    showGlobalSpinner: false,
  },
};
export const Selectors = {
  globalSpinner: (state: RootState) => state[NAMESPACE].globalSpinner,
};
