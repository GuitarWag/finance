import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { Creators as AppIntegrationCreators } from 'store/ducks/app-integration';
import Main from 'pages/main';
import { I18NProvider } from 'i18n/context';
import { useLanguage } from '../store/ducks/language/hooks';

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
  const { messages } = useLanguage();
  useEffect(() => {
    dispatch(AppIntegrationCreators.appStart());
  }, [dispatch]);
  return (
    <I18NProvider value={messages}>
      <Main />
      <GlobalStyle />
    </I18NProvider>
  );
};

export default Navigation;
