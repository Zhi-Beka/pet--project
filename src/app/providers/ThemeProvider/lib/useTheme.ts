/* eslint-disable indent */
import {
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
    Theme,
} from "app/providers/ThemeProvider/lib/ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;

            case Theme.LIGHT:
                newTheme = Theme.SPRING;
                break;
            case Theme.SPRING:
                newTheme = Theme.DARK;
                break;

            default:
                newTheme = Theme.DARK;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
