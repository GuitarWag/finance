import { makeStyles, Theme } from '@material-ui/core';
import { useMemo } from 'react';

const useBackdropStyle = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.light,
    opacity: 0.5,
  },
}));

const useBackDropProps = () => {
  const classes = useBackdropStyle();
  return useMemo(
    () => ({
      classes,
    }),
    [classes],
  );
};

export default useBackDropProps;
