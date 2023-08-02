import { memo } from 'react';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 */
export const AppLogo = memo((props: AppLogoProps) => {
  const { className } = props;

  return (
    <HStack fullWidth justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg className={cls.appLogo} />
    </HStack>
  );
});
