import { get } from 'lodash';
import firebase from 'my-firebase';

const NAMESPACE = 'loggedUser';

interface Actions {
  type:
    | 'logged-user/GOOGLE_LOGIN_START'
    | 'logged-user/GOOGLE_LOGIN_SUCCESS'
    | 'logged-user/GOOGLE_LOGIN_ERROR'
    | 'logged-user/FACEBOOK_LOGIN_START'
    | 'logged-user/FACEBOOK_LOGIN_SUCCESS'
    | 'logged-user/FACEBOOK_LOGIN_ERROR'
    | 'logged-user/LOGOUT_START'
    | 'logged-user/LOGOUT_SUCCESS'
    | 'logged-user/LOGOUT_ERROR';
  payload?: any;
}
interface RootState {
  loggedUser: State;
}

interface State {
  loading: boolean;
  error: typeof undefined;
  user: firebase.User | typeof undefined;
}

export const Types = {
  GOOGLE_LOGIN_START: 'logged-user/GOOGLE_LOGIN_START',
  GOOGLE_LOGIN_SUCCESS: 'logged-user/GOOGLE_LOGIN_SUCCESS',
  GOOGLE_LOGIN_ERROR: 'logged-user/GOOGLE_LOGIN_ERROR',
  FACEBOOK_LOGIN_START: 'logged-user/FACEBOOK_LOGIN_START',
  FACEBOOK_LOGIN_SUCCESS: 'logged-user/FACEBOOK_LOGIN_SUCCESS',
  FACEBOOK_LOGIN_ERROR: 'logged-user/FACEBOOK_LOGIN_ERROR',
  LOGOUT_START: 'logged-user/LOGOUT_START',
  LOGOUT_SUCCESS: 'logged-user/LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'logged-user/LOGOUT_ERROR',
};

const initialState = {
  loading: false,
  error: undefined,
  user: undefined,
};

export default (state: State = initialState, { type, payload }: Actions) => {
  switch (type) {
    case Types.GOOGLE_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case Types.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case Types.GOOGLE_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.FACEBOOK_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case Types.FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case Types.FACEBOOK_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case Types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: undefined,
      };
    case Types.LOGOUT_ERROR:
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
  googleLoginStart: () => ({
    type: Types.GOOGLE_LOGIN_START,
  }),
  googleLoginSuccess: (user: firebase.User | null) => ({
    type: Types.GOOGLE_LOGIN_SUCCESS,
    payload: user,
  }),
  googleLoginError: () => ({
    type: Types.GOOGLE_LOGIN_ERROR,
  }),
  facebookLoginStart: () => ({
    type: Types.FACEBOOK_LOGIN_START,
  }),
  facebookLoginSuccess: (user: firebase.User | null) => ({
    type: Types.FACEBOOK_LOGIN_SUCCESS,
    payload: user,
  }),
  facebookLoginError: () => ({
    type: Types.FACEBOOK_LOGIN_ERROR,
  }),
  logoutStart: () => ({
    type: Types.LOGOUT_START,
  }),
  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
  }),
  logoutError: (error: Error | typeof undefined) => ({
    type: Types.LOGOUT_ERROR,
    payload: error,
  }),
};

export const Selectors = {
  loading: (state: RootState) => state[NAMESPACE].loading,
  error: (state: RootState) => state[NAMESPACE].error,
  user: (state: RootState) => state[NAMESPACE].user,
  currentUserId: (state: RootState) =>
    get(state[NAMESPACE].user, 'uid', undefined),
};
