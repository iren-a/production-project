import { memo, useCallback } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import UpIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <Icon Svg={UpIcon} clickable onClick={onClick} className={className} />;
});
