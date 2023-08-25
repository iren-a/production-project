import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outlined' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: ButtonVariant;
  /**
   * Цвет кнопки
   */
  color?: ButtonColor;
  /**
   * Размер кнопки
   */
  size?: ButtonSize;
  /**
   * Флаг, позволяющий сделать кнопку не активной
   */
  disabled?: boolean;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
  /**
   * Доплнительный элемент слева
   */
  addonLeft?: ReactNode;
  /**
   * Доплнительный элемент справа
   */
  addonRight?: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    children,
    variant = 'outlined',
    color = 'normal',
    size = 'm',
    disabled,
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[variant], cls[color], cls[size]])}
      disabled={disabled}
      ref={ref}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
