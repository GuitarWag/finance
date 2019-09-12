import { useSelector } from 'react-redux';
import { Selectors as MonthsSelectors } from '../../months';

const useMonthsLoading = () => {
  return useSelector(MonthsSelectors.loading);
};

export default useMonthsLoading;
