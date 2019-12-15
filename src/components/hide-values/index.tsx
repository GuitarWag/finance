import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import noop from 'lodash/noop';

const INITIAL_VALUES = {
  hideValues: true,
  show: noop,
  hide: noop,
};

const HideValuesContext = createContext<typeof INITIAL_VALUES>(INITIAL_VALUES);

const useHideValuesContext = () => useContext(HideValuesContext);

interface Props {
  children: ReactNode;
}

const HideValuesContextProvider = ({ children }: Props) => {
  const [hideValues, setHideValues] = useState(true);
  const value = useMemo(() => ({
    hideValues,
    show: () => setHideValues(false),
    hide: () => setHideValues(true),
  }), [hideValues, setHideValues]);
  return (
    <HideValuesContext.Provider value={value}>
      {children}
    </HideValuesContext.Provider>
  );
};

export {
  HideValuesContextProvider as default,
  useHideValuesContext,
};
