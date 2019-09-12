import { useSelector } from 'react-redux';
import { Selectors as MonthsSelectors } from '../../months';

const useMonthsList = () => {
  return useSelector(MonthsSelectors.list);
};

export default useMonthsList;
