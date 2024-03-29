import { ForwardedRef, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum AppLinkTheme {
  Primary = 'primary',
  Inverted = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 */
export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const { to, className, children, theme = AppLinkTheme.Primary, ...otherProps } = props;

  return (
    <Link
      to={to}
      ref={ref}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
