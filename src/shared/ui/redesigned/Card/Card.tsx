import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'primary' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'padding_0',
  '8': 'padding_8',
  '16': 'padding_16',
  '24': 'padding_24',
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'primary',
    fullWidth,
    padding = '8',
    border = 'normal',
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];

  const mods: Mods = {
    [cls.fullWidth]: fullWidth,
  };

  return (
    <div
      className={classNames(cls.Card, mods, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[border],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
