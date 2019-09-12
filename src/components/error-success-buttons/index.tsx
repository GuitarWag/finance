import React, { ReactNode } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    label: {
      fontSize: '0.775rem',
      textTransform: 'none',
    },
  }),
);
const theme = createMuiTheme({
  palette: {
    primary: { main: '#3fde00' },
    secondary: { main: '#de0000' },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

interface Props {
  onClick: () => void;
  children: ReactNode | string | any;
}

const SuccessButton = ({ onClick, children, ...rest }: Props & ButtonProps) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Button color="primary" onClick={onClick} {...rest} classes={classes}>
        {children}
      </Button>
    </MuiThemeProvider>
  );
};

const ErrorButton = ({ onClick, children, ...rest }: Props & ButtonProps) => (
  <MuiThemeProvider theme={theme}>
    <Button color="primary" onClick={onClick} {...rest}>
      {children}
    </Button>
  </MuiThemeProvider>
);

export { SuccessButton, ErrorButton };
