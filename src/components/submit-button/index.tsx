import React, { ReactNode, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { connect, FormikValues } from 'formik';

interface Props {
  formik?: FormikValues;
  children?: string | ReactNode;
  variant?: 'contained' | 'outlined' | 'text' | undefined;
  color?: 'inherit' | 'primary' | 'secondary' | undefined;
  size?: 'small' | 'medium' | 'large';
}
const SubmitButton = ({
  children,
  formik,
  variant,
  color,
  size = 'medium',
}: Props) => {
  const onClick = useCallback(() => {
    formik && formik.handleSubmit();
  }, [formik]);
  return (
    <Button variant={variant} color={color} onClick={onClick} size={size}>
      {children}
    </Button>
  );
};

export default connect(SubmitButton);
