import React, { useCallback, useState, SetStateAction } from 'react';
import { ButtonGroup, Button, FormLabel } from '@material-ui/core';
import { connect, getIn, FormikValues } from 'formik';
import { FlexColumn } from 'ui-blocks';

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  label?: string;
  formik?: FormikValues;
  fieldPath: string;
  options: Option[];
}

const HorizontalSelect = connect(
  ({ options, formik, fieldPath, label }: Props) => {
    const [selected, setSelected] = useState<SetStateAction<string | number>>(
      getIn(formik && formik.values, fieldPath, ''),
    );
    const onClick = useCallback(
      (value: string | number) => {
        formik && formik.setFieldValue(fieldPath, value);
        setSelected(value);
      },
      [fieldPath, formik],
    );
    return (
      <FlexColumn>
        {label && <FormLabel component="legend">{label}</FormLabel>}
        <ButtonGroup fullWidth variant="outlined">
          {options &&
            options.map(option => (
              <Button
                onClick={() => onClick(option.value)}
                color="primary"
                variant={selected === option.value ? 'contained' : 'outlined'}
              >
                {option.label}
              </Button>
            ))}
        </ButtonGroup>
      </FlexColumn>
    );
  },
);

export default HorizontalSelect;
