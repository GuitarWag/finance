import styled, { StyledComponent } from 'styled-components';

export const FlexRow: StyledComponent<'div', HTMLDivElement> = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const FlexColumn: StyledComponent<'div', HTMLDivElement> = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Container = styled(FlexRow)`
  width: ${({ width }: { width: string }) => width};
`;
export const TextEllipsis = styled.div`
  width: ${({ width }: { width: string }) => width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Cursor: StyledComponent<'div', HTMLDivElement> = styled.div`
  cursor: pointer;
`;

export { default as InputField } from './InputField';
export { default as HorizontalSelect } from './HorizontalSelect';
