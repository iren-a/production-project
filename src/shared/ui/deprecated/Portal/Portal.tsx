import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 */
export const Portal: FC<PortalProps> = (props) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
