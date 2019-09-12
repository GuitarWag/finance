import React from 'react';
import Navigation from './navigation';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import store from './store';

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
