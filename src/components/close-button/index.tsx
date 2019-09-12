import React from 'react';
import Button from '@material-ui/core/Button';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 10px;
  width: 10px;
`;

interface Props {
  onClick: (event: React.MouseEvent<EventTarget, MouseEvent>) => void;
}

const CloseButton = ({ onClick }: Props) => (
  <Container>
    <Button onClick={onClick} size="small">
      <MdClose size="1x" />
    </Button>
  </Container>
);

export default CloseButton;
