import React from 'react';
import Button from '@material-ui/core/Button';
import { FaGoogle } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import useGoogleLogin from './useGoogleLogin';

export default function GoogleButton() {
  const onClick = useGoogleLogin();

  return (
    <Button
      size="small"
      fullWidth
      variant="outlined"
      color="primary"
      onClick={onClick}
    >
      <FaGoogle />
      <Typography variant="body2" component="p">
        Login com Google
      </Typography>
    </Button>
  );
}
