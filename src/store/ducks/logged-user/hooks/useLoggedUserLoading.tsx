import { useSelector } from 'react-redux';
import { Selectors as LoggedUserSelectors } from '../../logged-user';

const useLoggedUserLoading = () => {
  return useSelector(LoggedUserSelectors.loading);
};

export default useLoggedUserLoading;
