import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';
import styled, { StyledComponent } from 'styled-components';
import { useIsVisible } from 'hooks';
import CreateMonthForm from 'components/create-month-form';
import { useI18N } from 'store/ducks/language/hooks';

const Container: StyledComponent<'div', HTMLDivElement> = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 120px;
  left: 0;
  right: 0;
  width: 500px;
  min-height: 100px;
`;

const EmptyMonths = () => {
  const { ...config } = useIsVisible();
  const I18N = useI18N();
  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <Typography>{I18N.EMPTY_MONTHS_MESSAGE.message}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={config.toggle}>
              {I18N.CREATE_THE_FIRST_MONTH.message}
            </Button>
          </CardActions>
        </Card>
      </Container>
      <CreateMonthForm {...config} />
    </>
  );
};

export default EmptyMonths;
