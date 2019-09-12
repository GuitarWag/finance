import { useCallback, KeyboardEvent } from 'react';

const useOnKeyDown = (callback: () => void, keyCode: number) => {
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
      if (e.keyCode === keyCode) {
        callback();
      }
    },
    [callback, keyCode],
  );
  return onKeyDown;
};

export default useOnKeyDown;
