import React, { useCallback, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import { connect, getIn, FormikValues } from 'formik';
import { useOnKeyDown } from 'hooks';
import { useValidationMessage } from '../store/ducks/language/hooks';

interface Props {
  formik?: FormikValues;
  fieldPath: string;
  label?: string;
  margin?: 'none' | 'dense' | 'normal' | undefined;
  type?: 'text' | 'number';
  multiline?: boolean;
  autoFocus?: boolean;
  InputProps?: {};
}

const InputField = ({
  formik,
  fieldPath,
  label,
  margin = 'normal',
  type = 'text',
  multiline,
  autoFocus = false,
  InputProps,
}: Props) => {
  const value = formik && getIn(formik.values, fieldPath, '');
  const error = formik && getIn(formik.errors, fieldPath, false);
  const { message: errorMessage } = useValidationMessage(error);
  const touched = formik && getIn(formik.touched, fieldPath);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      formik && formik.setFieldValue(fieldPath, e.target.value);
    },
    [fieldPath, formik],
  );
  const onKeyDown = useOnKeyDown(formik && formik.handleSubmit, 13);
  return (
    <>
      <TextField
        type={type}
        fullWidth
        margin={margin}
        value={value}
        onChange={onChange}
        error={error && touched}
        variant="outlined"
        label={label}
        helperText={error && touched && errorMessage}
        onKeyDown={onKeyDown}
        multiline={multiline}
        autoFocus={autoFocus}
        InputProps={InputProps}
      />
    </>
  );
};

export default connect(InputField);
