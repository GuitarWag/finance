import React from 'react';
import Button from '@material-ui/core/Button';
import { FaFacebook } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import useFacebookLogin from './useFacebookLogin';

const FacebookButton = () => {
  const onClick = useFacebookLogin();
  return (
    <Button
      size="small"
      fullWidth
      variant="outlined"
      color="primary"
      onClick={onClick}
      disabled
    >
      <FaFacebook />
      <Typography variant="body2" component="p">
        Login com Facebook
      </Typography>
    </Button>
  );
};
export default FacebookButton;
