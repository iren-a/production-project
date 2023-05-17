import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.Clear}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});