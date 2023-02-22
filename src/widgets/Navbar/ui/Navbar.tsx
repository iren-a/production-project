import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => (
  <div className={classNames(cls.Navbar)}>
    <div className={cls.links} />
  </div>
);

export default Navbar;
