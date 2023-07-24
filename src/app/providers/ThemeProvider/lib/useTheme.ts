import { useContext } from 'react';
import { Theme, ThemeContext } from '@/app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.Dark:
        newTheme = Theme.Light;
        break;
      case Theme.Light:
        newTheme = Theme.Orange;
        break;
      case Theme.Orange:
        newTheme = Theme.Dark;
        break;
      default:
        newTheme = Theme.Light;
    }

    setTheme?.(newTheme);
    saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.Light,
    toggleTheme,
  };
}
