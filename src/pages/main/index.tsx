import React from 'react';
import NavBar from 'components/nav-bar';
import ApresentationCard from '../../components/apresentation-card';
import { useLoggedUserInfo } from 'store/ducks/logged-user/hooks';
import Content from 'components/content';
import FullPageSpinner from 'components/full-page-spinner';

const Main = () => {
  const user = useLoggedUserInfo();
  return (
    <>
      <NavBar />
      <FullPageSpinner />
      {!user ? <ApresentationCard /> : <Content />}
    </>
  );
};
export default Main;
