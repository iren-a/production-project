import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-icon.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={ThemeIcon} clickable onClick={toggleHandler} />}
      off={
        <ButtonDeprecated
          theme={ButtonTheme.Clear}
          className={classNames('', {}, [className])}
          onClick={toggleHandler}
        >
          <IconDeprecated Svg={ThemeIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
  );
});
