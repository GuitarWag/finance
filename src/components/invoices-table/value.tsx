import React from 'react';
import { Typography } from '@material-ui/core';
import { MdVisibilityOff } from 'react-icons/md';
import { useI18N } from 'store/ducks/language/hooks';
import { useHideValuesContext } from '../hide-values';

const Value = ({ value }: {
  value: number | string;
}) => {
  const I18N = useI18N();
  const { hideValues, show } = useHideValuesContext();
  return !hideValues ?
    (
      <Typography>
        {I18N.MONETARY_SIGN.message} {value}
      </Typography>
    ) :
    (
      <MdVisibilityOff onClick={show} />
    );
};

export default Value;
