import React, { useCallback, useState } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Paper } from '@material-ui/core';
import InvoicesTable from 'components/invoices-table';
import { Month } from 'services/types';
import styled, { StyledComponent } from 'styled-components';
import get from 'lodash/get';
import CreateInvoiceForm from 'components/create-invoice-form';
import { useIsVisible } from 'hooks';
import { useHasMonths } from 'store/ducks/months/hooks';
import { useI18N } from 'i18n/context';
import EmptyMonths from 'components/empty-months';

const StyledPaper: StyledComponent<typeof Paper, {}> = styled(Paper)`
  display: flex;
  flex: 1;
`;
const StyledScrollBar: StyledComponent<typeof PerfectScrollbar, {}> = styled(
  PerfectScrollbar,
)`
  display: flex;
  flex: 1 1 100%;
  max-height: calc(100vh - 180px);
  justify-content: space-around;
  padding: 10px;
  @media only screen and (max-width: 1160px) {
    flex-direction: column;
  }
`;

interface Props {
  currentMonth: Month | typeof undefined;
}
const MonthCard = ({ currentMonth }: Props) => {
  const [type, setType] = useState('inputs');
  const inputs = get(currentMonth, 'inputs', []);
  const outputs = get(currentMonth, 'outputs', []);
  const totalIns = get(currentMonth, 'totalIns', 0);
  const totalOuts = get(currentMonth, 'totalOuts', 0);
  const I18N = useI18N();
  const hasMonths = useHasMonths();
  const { ...config } = useIsVisible();

  const toggleModal = useCallback(
    (type: 'inputs' | 'outputs') => {
      setType(type);
      config.toggle();
    },
    [config],
  );

  return (
    <StyledPaper>
      <StyledScrollBar>
        {hasMonths ? (
          <>
            <InvoicesTable
              data={inputs}
              total={totalIns}
              headerLabel={I18N.REVENUES.message}
              toggleModal={toggleModal}
            />
            <InvoicesTable
              data={outputs}
              total={totalOuts}
              type="outputs"
              headerLabel={I18N.EXPENSES.message}
              toggleModal={toggleModal}
            />
          </>
        ) : (
          <EmptyMonths />
        )}
        <CreateInvoiceForm {...config} type={type} />
      </StyledScrollBar>
    </StyledPaper>
  );
};

export default MonthCard;
