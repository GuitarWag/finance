const NAMESPACE = 'appIntegration';

interface Actions {
  type: 'app-integration/APP_START' | 'app-integration/APP_START_SUCCESS';
  payload?: any;
}
interface RootState {
  appIntegration: State;
}

interface State {
  loading: boolean;
}
export const Types = {
  APP_START: 'app-integration/APP_START',
  APP_START_SUCCESS: 'app-integration/APP_START_SUCCESS',
};

const initialState = {
  loading: false,
};

export default (state = initialState, { type }: Actions) => {
  switch (type) {
    case Types.APP_START:
      return { ...state, loading: true };
    case Types.APP_START_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export const Creators = {
  appStart: () => ({
    type: Types.APP_START,
    meta: {
      showGlobalSpinner: true,
    },
  }),
  appStartSuccess: () => ({
    type: Types.APP_START_SUCCESS,
    meta: {
      showGlobalSpinner: false,
    },
  }),
};

export const Selectors = {
  loading: (state: RootState) => state[NAMESPACE].loading,
};
