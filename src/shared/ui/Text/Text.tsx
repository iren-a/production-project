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
  S = 'sizeS',
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

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.Primary,
    align = TextAlign.Left,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
      { title && <HeaderTag className={cls.title}>{title}</HeaderTag> }
      { text && <p className={cls.text}>{text}</p> }
    </div>
  );
});
