import { useDispatch } from 'react-redux';
import { Creators as MonthsCreators } from '../../months';
import { useCallback } from 'react';
import { MonthReq } from 'services/types';

const useSubmitMonth = () => {
  const dispatch = useDispatch();
  const submit = useCallback(
    (month: MonthReq) => {
      dispatch(MonthsCreators.addMonthStart(month));
    },
    [dispatch],
  );
  return submit;
};

export default useSubmitMonth;
