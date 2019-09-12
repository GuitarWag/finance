import React, { useMemo } from 'react';
import styled, { StyledComponent } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGlobalSpinner } from 'store/ducks/spinner/hooks';

const FullPageSpinnerContainer: StyledComponent<
  'div',
  HTMLDivElement,
  {
    visible: boolean;
  }
> = styled.div`
  ${({ visible }: { visible: boolean }) =>
    visible ? 'display: flex' : 'display: none'};
  z-index: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(252, 252, 252, 0.7);
  top: 0;
  left: 0;
`;

const FullPageSpinner = () => {
  const visible = useGlobalSpinner();
  return useMemo(
    () => (
      <FullPageSpinnerContainer visible={visible}>
        <CircularProgress />
      </FullPageSpinnerContainer>
    ),
    [visible],
  );
};
export default FullPageSpinner;
