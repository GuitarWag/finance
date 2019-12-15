import React from 'react';
import Navigation from './navigation';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import HideValuesContextProvider from 'components/hide-values';
import theme from './theme';
import store from './store';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <HideValuesContextProvider>
          <Navigation />
        </HideValuesContextProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
