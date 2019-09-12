import React, { useCallback } from 'react';
import { UseIsVisibleProps } from 'hooks/useIsVisible';
import { Modal, Paper, ClickAwayListener, Backdrop } from '@material-ui/core';
import styled from 'styled-components';
import { InputField, FlexColumn } from 'ui-blocks';
import { Formik } from 'formik';
import { now } from 'moment';
import { NEW_MONTH_VALIDATION_SCHEMA, FIELDPATHS } from 'validation';
import { TITLE, CREATE } from 'i18n';
import SubmitButton from 'components/submit-button';
import { useSubmitMonth } from 'store/ducks/months/hooks';
import { MonthReq } from 'services/types';
import { useBackdropProps } from 'hooks';

const ModalContainer = styled(Paper)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50px;
  left: 0;
  right: 0;
  padding: 50px;
  width: 500px;
  height: fit-content;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const initialValues = {
  title: '',
  balance: 0,
  totalIns: 0,
  totalOuts: 0,
  dateOfCreation: now(),
};
const CreateMonthForm = ({
  isVisible,
  toggle,
  anchorRef,
}: UseIsVisibleProps) => {
  const submit = useSubmitMonth();
  const BackdropProps = useBackdropProps();
  const handleSubmit = useCallback(
    (month: MonthReq) => {
      submit(month);
      setTimeout(toggle, 10);
    },
    [submit, toggle],
  );
  return (
    <Modal
      ref={anchorRef}
      open={isVisible}
      BackdropComponent={Backdrop}
      BackdropProps={BackdropProps}
    >
      <ClickAwayListener onClickAway={toggle}>
        <ModalContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={NEW_MONTH_VALIDATION_SCHEMA}
          >
            <FlexColumn>
              <InputField
                fieldPath={FIELDPATHS.TITLE}
                label={TITLE.message}
                autoFocus
              />
              <SubmitButton variant="contained" color="primary" size="large">
                {CREATE.message}
              </SubmitButton>
            </FlexColumn>
          </Formik>
        </ModalContainer>
      </ClickAwayListener>
    </Modal>
  );
};

export default CreateMonthForm;
