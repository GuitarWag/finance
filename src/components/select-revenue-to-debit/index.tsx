import React, { useCallback, useMemo, ReactNode, useState } from 'react';
import { UseIsVisibleProps } from 'hooks/useIsVisible';
import {
  Modal,
  Paper,
  ClickAwayListener,
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  InputAdornment,
  MenuItem,
  Backdrop, makeStyles,
} from '@material-ui/core';
import styled, { StyledComponent } from 'styled-components';
import { InputField, HorizontalSelect } from 'ui-blocks';
import { Formik } from 'formik';
import { map, get, uniqueId } from 'lodash';
import { NEW_INVOICE_VALIDATION_SCHEMA, FIELDPATHS } from 'validation';
import SubmitButton from 'components/submit-button';
import { InvoiceReq } from 'services/types';
import { useCurrentMonthInputs } from 'store/ducks/current-month/hooks';
import { useSubmitInvoice } from 'store/ducks/invoices/hooks';
import useBackDropProps from 'hooks/useBackdropProps';
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
  const I18N = useI18N();
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    toggle();
  }, [setValue, toggle]);

  const handleClick = useCallback(() => {
    toggle();
  }, [toggle]);
  return (
    <>
      <SuccessButton
      disabled={item.paid}
      onClick={handleClick}
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
