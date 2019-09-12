import React, { useCallback, useMemo } from 'react';
import { UseIsVisibleProps } from 'hooks/useIsVisible';
import {
  Modal,
  Paper,
  ClickAwayListener,
  Typography,
  FormGroup,
  InputAdornment,
  Backdrop,
} from '@material-ui/core';
import styled from 'styled-components';
import { InputField, HorizontalSelect } from 'ui-blocks';
import { Formik } from 'formik';
import { now } from 'moment';
import { NEW_INVOICE_VALIDATION_SCHEMA, FIELDPATHS } from 'validation';
import {
  TITLE,
  CREATE,
  REVENUE,
  EXPENSE,
  VALUE,
  DESCRIPTION,
  RELATIVE_TO,
  MONETARY_SIGN,
} from 'i18n';
import SubmitButton from 'components/submit-button';
import { InvoiceReq } from 'services/types';
import { useCurrentMonth } from 'store/ducks/current-month/hooks';
import { useSubmitInvoice } from 'store/ducks/invoices/hooks';
import useBackDropProps from '../../hooks/useBackdropProps';

interface Props {
  type?: string;
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
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

const InputProps = {
  startAdornment: (
    <InputAdornment position="start">{MONETARY_SIGN.message}</InputAdornment>
  ),
};

const options = [
  {
    value: 'inputs',
    label: REVENUE.message,
  },
  {
    value: 'outputs',
    label: EXPENSE.message,
  },
];

const CreateInvoiceForm = ({
  isVisible,
  toggle,
  anchorRef,
  type,
}: UseIsVisibleProps & Props) => {
  const currentMonth = useCurrentMonth();
  const BackdropProps = useBackDropProps();
  const initialValues = useMemo(
    () => ({
      title: '',
      relativeMonth: currentMonth && currentMonth.identifier,
      type: type || 'inputs',
      dateOfInclusion: now(),
      description: '',
      value: null,
      paid: false,
    }),
    [currentMonth, type],
  );
  const submit = useSubmitInvoice();
  const handleSubmit = useCallback(
    (invoiceReq: InvoiceReq) => {
      submit(invoiceReq);
      setTimeout(toggle, 600);
    },
    [toggle, submit],
  );

  return (
    <Modal
      ref={anchorRef}
      open={isVisible}
      BackdropProps={BackdropProps}
      BackdropComponent={Backdrop}
    >
      <ClickAwayListener onClickAway={toggle}>
        <ModalContainer>
          <Typography variant="h6">
            {RELATIVE_TO.message}
            {currentMonth && currentMonth.title}
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={NEW_INVOICE_VALIDATION_SCHEMA}
            validateOnChange
            validateOnBlur
          >
            <FormGroup>
              <HorizontalSelect fieldPath={FIELDPATHS.TYPE} options={options} />
              <InputField
                fieldPath={FIELDPATHS.TITLE}
                label={TITLE.message}
                autoFocus
              />
              <InputField
                fieldPath={FIELDPATHS.VALUE}
                label={VALUE.message}
                type="number"
                InputProps={InputProps}
              />
              <InputField
                fieldPath={FIELDPATHS.DESCRIPTION}
                label={DESCRIPTION.message}
                multiline
              />
              <SubmitButton variant="contained" color="primary" size="large">
                {CREATE.message}
              </SubmitButton>
            </FormGroup>
          </Formik>
        </ModalContainer>
      </ClickAwayListener>
    </Modal>
  );
};

export default CreateInvoiceForm;
