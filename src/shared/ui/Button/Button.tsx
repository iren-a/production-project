import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  Clear = 'clear',
  ClearInverted = 'clearInverted',
  Outline = 'outline',
  OutlineRed = 'outlineRed',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  Xl = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ButtonTheme;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
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
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.Outline,
    square,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
