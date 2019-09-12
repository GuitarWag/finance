import { useSelector } from 'react-redux';
import { Selectors as SpinnerSelectors } from '../index';

const useGlobalSpinner = () => useSelector(SpinnerSelectors.globalSpinner);

export default useGlobalSpinner;
