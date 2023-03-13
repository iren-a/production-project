import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
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
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.Light,
    toggleTheme,
  };
}
