import React from 'react';
import { Button } from '@material-ui/core';
import { useI18N } from 'store/ducks/language/hooks';
import { useHideValuesContext } from '../hide-values';

const HideValuesButton = () => {
  const { show, hide, hideValues } = useHideValuesContext();
  const I18N = useI18N();
  return (
    <Button
      color="secondary"
      aria-label="add-month"
      variant="outlined"
      onClick={hideValues ? show : hide}
    >
      {!hideValues ? I18N.HIDE_VALUES.message : I18N.SHOW_VALUES.message}
    </Button>
  );
};

export default HideValuesButton;
