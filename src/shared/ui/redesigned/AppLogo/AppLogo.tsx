import { memo } from 'react';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <HStack fullWidth justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
      <AppSvg width={size} height={size} color="black" className={cls.appLogo} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
