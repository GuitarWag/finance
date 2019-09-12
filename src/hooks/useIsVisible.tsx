import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  RefObject,
} from 'react';
import styled, { StyledComponent } from 'styled-components';

export const Overlay: StyledComponent<'div', HTMLDivElement> = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;
export interface UseIsVisibleProps {
  isVisible: boolean;
  toggle: () => void;
  onClickAway: (event: React.MouseEvent<EventTarget, MouseEvent>) => void;
  anchorRef:
    | ((instance: unknown) => void)
    | RefObject<unknown>
    | null
    | undefined;
}

export default function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle: any = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const anchorRef = useRef<HTMLButtonElement & HTMLDivElement>(null);
  const onClickAway = useCallback((event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setIsVisible(false);
  }, []);

  return useMemo(() => ({ isVisible, toggle, anchorRef, onClickAway }), [
    anchorRef,
    isVisible,
    onClickAway,
    toggle,
  ]);
}
