import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 */
export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size = 100, alt, fallbackInverted } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;

  const errorFallback = (
    <Icon width={size} height={size} Svg={UserIcon} inverted={fallbackInverted} />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={style}
      alt={alt}
    />
  );
});
