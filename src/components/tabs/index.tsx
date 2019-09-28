import React, { useCallback } from 'react';
import { Paper, Tabs as MDTabs, Tab } from '@material-ui/core';
import { useMonthsList } from 'store/ducks/months/hooks';
import uuid from 'uuid';
import useSetCurrentMonth from 'store/ducks/current-month/hooks/useSetCurrentMonth';
import { Month } from 'services/types';
import { useI18N } from '../../store/ducks/language/hooks';

const Tabs = () => {
  const [value, setValue] = React.useState(0);
  const monthsList = useMonthsList();
  const setCurrentMonth = useSetCurrentMonth();
  const I18N = useI18N();

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
        {monthsList &&
          monthsList.map(month => (
            <Tab
              fullWidth
              label={`${month.title} ${I18N.MONETARY_SIGN.message}${month.balance}`}
              key={uuid.v4()}
              onClick={() => onClick(month)}
            />
          ))}
      </MDTabs>
    </Paper>
  );
};

export default Tabs;
