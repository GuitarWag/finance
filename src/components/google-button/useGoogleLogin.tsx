import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as LoggedUserCreators } from 'store/ducks/logged-user';

const useGoogleLogin = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(LoggedUserCreators.googleLoginStart());
  }, [dispatch]);
};

export default useGoogleLogin;
