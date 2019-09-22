import { useMonthsList } from './index';

const useHasMonths = () => {
  const monthsList = useMonthsList();
  return monthsList && !!monthsList.length;
};

export default useHasMonths;
