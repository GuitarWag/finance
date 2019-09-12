import { Meta } from 'store/ducks/spinner';
import { i18nptBR, I18N } from 'i18n';
import {
  ptBR as ptBRFlag,
  enUS as enUSFlag,
  esES as esESFlag,
} from 'theme/assets';

export const ptBR: 'ptBR' = 'ptBR';
export const esES: 'esES' = 'esES';
export const enUS: 'enUS' = 'enUS';
const FLAGS = {
  ptBR: ptBRFlag,
  esES: esESFlag,
  enUS: enUSFlag,
};

const NAMESPACE = 'language';

type Payload = 'ptBR' | 'enUS' | 'esES';

interface Action {
  type: 'language/SET_CURRENT_LANGUAGE';
  payload: Payload;
  meta?: Meta;
}
interface RootState {
  language: State;
}

interface State {
  currentLanguage: 'ptBR' | 'enUS' | 'esES';
  currentFlag: string | undefined;
  messages: typeof i18nptBR;
}

export const Types = {
  SET_CURRENT_LANGUAGE: 'language/SET_CURRENT_LANGUAGE',
};

const initialState = {
  currentLanguage: ptBR,
  messages: i18nptBR,
  currentFlag: ptBRFlag,
};

export default (state: State = initialState, { type, payload }: Action) => {
  if (type === Types.SET_CURRENT_LANGUAGE) {
    return {
      ...state,
      currentLanguage: payload,
      currentFlag: FLAGS[payload],
      messages: I18N[payload],
    };
  }
  return state;
};

export const Creators = {
  setCurrentLanguage: (payload: Payload) => ({
    payload,
    type: Types.SET_CURRENT_LANGUAGE,
  }),
};

export const Selectors = {
  currentLanguage: (state: RootState) => state[NAMESPACE].currentLanguage,
  messages: (state: RootState) => state[NAMESPACE].messages,
  currentFlag: (state: RootState) => state[NAMESPACE].currentFlag,
};
