import { useMemo } from 'react';
import { values, find } from 'lodash';
import useLanguage from './useLanguage';

interface Return {
  key: string;
  message: string;
}

const NO_ERROR = {
  key: '',
  message: '',
};
const useValidationMessage = (errorMessageKey: string) => {
  const { messages } = useLanguage();
  const I18N = useMemo(() => values(messages), [messages]);
  return useMemo(() => {
    if (!errorMessageKey) return NO_ERROR;
    return find(I18N, o => o.key === errorMessageKey);
  }, [I18N, errorMessageKey]) as Return;
};

export default useValidationMessage;
