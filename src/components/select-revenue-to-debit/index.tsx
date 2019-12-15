import React, { useCallback, useState } from 'react';
import {
  Modal,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';
import styled, { StyledComponent } from 'styled-components';
import { Invoice } from 'services/types';
import { usePayInvoice } from 'store/ducks/invoices/hooks';
import { useI18N } from 'store/ducks/language/hooks';
import { SuccessButton } from 'components/error-success-buttons';
import { MdCheck } from 'react-icons/all';
import { useIsVisible } from 'hooks';
import Select from './select';

interface Props {
  item: any;
}

const ModalContainer = styled(Paper)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50px;
  left: 0;
  right: 0;
  padding: 50px;
  width: fit-content;
  min-width: 500px;
  height: auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const PaidIcon: StyledComponent<typeof MdCheck, HTMLOrSVGElement> = styled(
  MdCheck,
)`
  fill: green;
`;

const SelectRevenueToDebit = ({
  item,
}: Props) => {
  const [value, setValue] = useState('');
  const { isVisible, anchorRef, toggle } = useIsVisible();
  const payInvoice = usePayInvoice();
  const I18N = useI18N();
  const onChange = useCallback((payWith: Invoice) => {
    toggle();
    payInvoice(item, payWith);
    if (payWith) {
      setValue(payWith.identifier);
    } else {
      setValue('');
    }
  }, [toggle, item, payInvoice, setValue]);
  return (
    <>
      <SuccessButton
      disabled={item.paid}
      onClick={toggle}
      variant={!item.paid ? 'outlined' : undefined}
    >
      {item.paid ? <PaidIcon /> : I18N.PAY.message}
    </SuccessButton>
    <Modal
      ref={anchorRef}
      open={isVisible}
    >
      <ClickAwayListener onClickAway={toggle}>
        <ModalContainer>
          <Select item={item} onChange={onChange} value={value}/>
        </ModalContainer>
      </ClickAwayListener>
    </Modal>
      </>
  );
};

export default SelectRevenueToDebit;
