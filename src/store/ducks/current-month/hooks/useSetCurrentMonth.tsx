import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as CurrentMonthCreators } from '../../current-month';
import { Month } from 'services/types';

const useSetCurrentMonth = () => {
  const dispatch = useDispatch();
  return useCallback(
    (month: Month) => {
      dispatch(CurrentMonthCreators.setCurrentMonthStart(month));
    },
    [dispatch],
  );
};

export default useSetCurrentMonth;
