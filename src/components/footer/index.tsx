import React from 'react';
import {
  AppBar,
  Link,
  Typography,
  createStyles,
  makeStyles,
  Toolbar,
  Theme,
} from '@material-ui/core';
import { LINKS } from 'helper-constants';
import { useI18N } from 'store/ducks/language/hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    container: {
      height: 45,
      minHeight: 0,
      justifyContent: 'space-between',
      background: theme.palette.primary.dark,
    },
  }),
);

const Footer = () => {
  const I18N = useI18N();
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed" color="primary">
      <Toolbar className={classes.container}>
        <Typography>{I18N.COPYRIGHT.message}</Typography>
        <Link href={LINKS.GIT_HUB} color="secondary" target="_blank">
          <Typography>{I18N.SEE_ON_GITHUB.message}</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
