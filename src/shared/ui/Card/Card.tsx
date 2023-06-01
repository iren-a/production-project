import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  Primary = 'primary',
  Outlined = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode
  theme?: CardTheme;
  fullWidth?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.Primary,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
  };

  return (
    <div
      className={classNames(cls.Card, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
