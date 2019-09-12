import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as LoggedUserCreators } from 'store/ducks/logged-user';

const useFacebookLogin = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(LoggedUserCreators.facebookLoginStart());
  }, [dispatch]);
};

export default useFacebookLogin;
