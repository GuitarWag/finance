import { useSelector } from 'react-redux';
import { Selectors as AppIntegrationSelectors } from 'store/ducks/app-integration';

const useAppStartLoading = () => {
  return useSelector(AppIntegrationSelectors.loading);
};

export default useAppStartLoading;
