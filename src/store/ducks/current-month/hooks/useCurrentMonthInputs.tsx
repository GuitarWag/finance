import { useSelector } from 'react-redux';
import { Selectors as CurrentMonthSelectors } from '../../current-month';

const useCurrentMonthInputs = () => {
  const month  = useSelector(CurrentMonthSelectors.month);
  if (month) {
    const { inputs } = month;
    return inputs;
  }
  return null;
};

export default useCurrentMonthInputs;
