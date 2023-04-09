import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  Primary = 'primary',
  Inverted = 'inverted',
  Error = 'error',
}

export enum TextAlign {
  Right = 'right',
  Left = 'left',
  Center = 'center',
}

export enum TextSize {
  M = 'sizeM',
  L = 'sizeL',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.Primary,
    align = TextAlign.Left,
    size = TextSize.M,
  } = props;

  return (
    <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
      { title && <p className={cls.title}>{title}</p> }
      { text && <p className={cls.text}>{text}</p> }
    </div>
  );
});
