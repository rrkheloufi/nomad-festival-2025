// Theme configuration
export type ThemeMode = 'dark' | 'light';

export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  light: string;
}

export interface Theme {
  colors: ThemeColors;
}

export const themes: Record<ThemeMode, Theme> = {
  dark: {
    colors: {
      background: '#1E0023',
      text: '#FFF8EE',
      primary: '#ABFFAF',
      secondary: '#6B46C1',
      accent: '#00D1B2',
      dark: '#1E0023',
      light: '#FFF8EE'
    }
  },
  light: {
    colors: {
      background: '#FFF8EE',
      text: '#1E0023',
      primary: '#A51E25',
      secondary: '#6B46C1',
      accent: '#00D1B2',
      dark: '#1E0023',
      light: '#FFF8EE'
    }
  }
};