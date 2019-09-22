import React from 'react';
import MonthCard from 'components/month-card';
import { useCurrentMonth } from 'store/ducks/current-month/hooks';
import EmptyPanel from 'components/empty-panel';
import { FlexRow } from 'ui-blocks';
import styled from 'styled-components';

const Container = styled(FlexRow)`
  flex: 1;
`;
const MainPanel = () => {
  const currentMonth = useCurrentMonth();
  const shouldShowMonthCard =
    currentMonth &&
    !(!!currentMonth.inputs.length || !!currentMonth.outputs.length);
  return (
    <Container>
      {shouldShowMonthCard ? (
        <EmptyPanel />
      ) : (
        <MonthCard currentMonth={currentMonth} />
      )}
    </Container>
  );
};

export default MainPanel;
