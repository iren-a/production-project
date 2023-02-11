import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => (
  <div className={classNames(cls.Navbar)}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.Secondary} className={cls.mainLink} to="/">Главная</AppLink>
      <AppLink theme={AppLinkTheme.Secondary} to="/about">О сайте</AppLink>
    </div>
  </div>
);

export default Navbar;
