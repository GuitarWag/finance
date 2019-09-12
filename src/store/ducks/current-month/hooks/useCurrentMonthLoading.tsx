import { useSelector } from 'react-redux';
import { Selectors as CurrentMonthSelectors } from '../../current-month';

const useCurrentMonthLoading = () => {
  return useSelector(CurrentMonthSelectors.loading);
};

export default useCurrentMonthLoading;
