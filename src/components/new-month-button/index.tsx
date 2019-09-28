import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import CreateMonthForm from 'components/create-month-form';
import { useIsVisible } from 'hooks';
import { useI18N } from 'store/ducks/language/hooks';

const Container = styled.div`
  margin-right: auto;
`;

const NewMonthButton = () => {
  const { ...config } = useIsVisible();
  const I18N = useI18N();
  return (
    <>
      <Container>
        <Button
          color="secondary"
          aria-label="add-month"
          variant="outlined"
          onClick={config.toggle}
        >
          {I18N.ADD_NEW_MONTH.message}
        </Button>
      </Container>
      <CreateMonthForm {...config} />
    </>
  );
};

export default NewMonthButton;
