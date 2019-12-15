import React, { useCallback } from 'react';
import { Paper, Tabs as MDTabs, Tab, Typography } from '@material-ui/core';
import map from 'lodash/map';
import { useMonthsList } from 'store/ducks/months/hooks';
import useSetCurrentMonth from 'store/ducks/current-month/hooks/useSetCurrentMonth';
import { Month } from 'services/types';
import { useI18N } from '../../store/ducks/language/hooks';
import { useHideValuesContext } from '../hide-values';
import { MdVisibilityOff } from 'react-icons/all';

const Tabs = () => {
  const [value, setValue] = React.useState(0);
  const monthsList = useMonthsList();
  const setCurrentMonth = useSetCurrentMonth();
  const I18N = useI18N();
  const { hideValues, show } = useHideValuesContext();

  const handleChange = useCallback((_, newValue: number) => {
    setValue(newValue);
  }, []);

  const onClick = useCallback(
    (month: Month) => {
      setCurrentMonth(month);
    },
    [setCurrentMonth],
  );

  return (
    <Paper>
      <MDTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {map(monthsList, month => (
            <Tab
              fullWidth
              label={!hideValues
                ? `${month.title} ${I18N.MONETARY_SIGN.message}${month.balance}`
                : (
                  <Typography>
                    {month.title}
                    <MdVisibilityOff onClick={show} />
                  </Typography>
                  )
              }
              key={month.identifier}
              onClick={() => onClick(month)}
            />
          ))}
      </MDTabs>
    </Paper>
  );
};

export default Tabs;
