import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeMode, themes } from '../styles/theme';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'theme';

/** Thème par défaut selon l'heure locale : clair de 7h à 19h, sombre sinon. */
function getThemeFromTime(): ThemeMode {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
}

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return getThemeFromTime();
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  // Toggle between dark and light mode (préférence persistée)
  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      const next = prevMode === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  };

  // Sans préférence enregistrée, suivre l'heure (ex. passage 7h / 19h avec l'onglet ouvert)
  useEffect(() => {
    const hasUserPreference = (): boolean => {
      const v = localStorage.getItem(THEME_STORAGE_KEY);
      return v === 'light' || v === 'dark';
    };

    if (hasUserPreference()) {
      return;
    }

    const sync = () => {
      const next = getThemeFromTime();
      setThemeMode((prev) => (prev !== next ? next : prev));
    };

    const id = window.setInterval(sync, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Apply theme CSS variables when theme changes
  useEffect(() => {
    
    // Apply theme colors as CSS variables
    const root = document.documentElement;
    const theme = themes[themeMode];
    
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-dark', theme.colors.dark);
    root.style.setProperty('--color-light', theme.colors.light);
    
    // Add RGB versions for transparency
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    };
    
    root.style.setProperty('--color-background-rgb', hexToRgb(theme.colors.background) || '0, 0, 125');
    root.style.setProperty('--color-text-rgb', hexToRgb(theme.colors.text) || '250, 230, 235');
    root.style.setProperty('--color-primary-rgb', hexToRgb(theme.colors.primary) || '255, 15, 170');
    root.style.setProperty('--color-secondary-rgb', hexToRgb(theme.colors.secondary) || '130, 140, 250');
    root.style.setProperty('--color-dark-rgb', hexToRgb(theme.colors.dark) || '0, 0, 125');
    
    // Add theme class to body
    document.body.className = themeMode;
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}