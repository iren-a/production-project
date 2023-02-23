import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme,
        toggleTheme: toggleTheme,
    };
}
