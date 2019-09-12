import { useSelector } from 'react-redux';
import { Selectors as CurrentMonthSelectors } from '../../current-month';

const useCurrentMonth = () => {
  return useSelector(CurrentMonthSelectors.month);
};

export default useCurrentMonth;
