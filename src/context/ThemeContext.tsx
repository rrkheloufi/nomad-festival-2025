import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeMode, themes } from '../styles/theme';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Get initial theme from localStorage or default to 'dark'
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    return savedTheme || 'dark';
  });

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  // Update localStorage and apply theme CSS variables when theme changes
  useEffect(() => {
    localStorage.setItem('theme', themeMode);
    
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
    
    root.style.setProperty('--color-background-rgb', hexToRgb(theme.colors.background) || '30, 0, 35');
    root.style.setProperty('--color-text-rgb', hexToRgb(theme.colors.text) || '255, 248, 238');
    root.style.setProperty('--color-primary-rgb', hexToRgb(theme.colors.primary) || '165, 30, 37');
    
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