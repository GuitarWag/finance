import { createContext, useContext } from 'react';
import { i18nptBR } from './index';

const I18NContext = createContext(i18nptBR);

export const useI18N = () => {
  return useContext(I18NContext);
};

export const I18NProvider = I18NContext.Provider;
export const I18NConsumer = I18NContext.Consumer;

export default I18NContext;
