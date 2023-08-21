import { createContext } from 'react';

export enum Theme {
  Light = 'app_light_theme',
  Dark = 'app_dark_theme',
  Orange = 'app_orange_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const LOCAL_STORAGE_LAST_DESIGN_KEY = 'last_design';
