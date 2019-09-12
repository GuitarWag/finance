import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';
import { EMPTY_PANEL_MESSAGE, CREATE_THE_FIRST } from 'i18n';
import styled, { StyledComponent } from 'styled-components';
import { useIsVisible } from 'hooks';
import CreateInvoiceForm from 'components/create-invoice-form';

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

const EmptyPanel = () => {
  const { ...config } = useIsVisible();

  return (
    <>
      <Container>
        <Card>
          <CardContent>
            <Typography>{EMPTY_PANEL_MESSAGE.message}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={config.toggle}>
              {CREATE_THE_FIRST.message}
            </Button>
          </CardActions>
        </Card>
      </Container>
      <CreateInvoiceForm {...config} />
    </>
  );
};

export default EmptyPanel;
