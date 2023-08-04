import { memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, activeClassName = '', children, ...otherProps } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [className])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
