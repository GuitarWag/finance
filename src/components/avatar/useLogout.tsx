import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as LoggedUserCreators } from 'store/ducks/logged-user';

const useLogOut = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(LoggedUserCreators.logoutStart());
  }, [dispatch]);
};

export default useLogOut;
