import { useSelector } from 'react-redux';
import { Selectors as LoggedUserSelectors } from '../../logged-user';

const useLoggedUserInfo = () => {
  return useSelector(LoggedUserSelectors.user);
};

export default useLoggedUserInfo;
