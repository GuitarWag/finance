import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { Creators as AppIntegrationCreators } from 'store/ducks/app-integration';
import Main from 'pages/main';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
}`;

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AppIntegrationCreators.appStart());
  }, [dispatch]);
  return (
    <>
      <Main />
      <GlobalStyle />
    </>
  );
};

export default Navigation;
