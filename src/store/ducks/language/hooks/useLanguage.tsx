import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Selectors as LanguageSelectors,
  Creators as LanguageCreators,
} from '../../language';

const useLanguage = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(LanguageSelectors.currentLanguage);
  const currentFlag = useSelector(LanguageSelectors.currentFlag);
  const messages = useSelector(LanguageSelectors.messages);

  const setLanguage = useCallback(
    (newLanguage: 'ptBR' | 'enUS' | 'esES') => {
      dispatch(LanguageCreators.setCurrentLanguage(newLanguage));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      setLanguage,
      currentLanguage,
      messages,
      currentFlag,
    }),
    [setLanguage, currentLanguage, messages, currentFlag],
  );
};

export default useLanguage;
