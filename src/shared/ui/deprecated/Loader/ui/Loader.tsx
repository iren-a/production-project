import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 */
export const Loader = memo((props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
