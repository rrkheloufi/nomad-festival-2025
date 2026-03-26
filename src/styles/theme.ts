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
      background: '#00007D',
      text: '#FAE6EB',
      primary: '#FAC346',
      secondary: '#828CFA',
      accent: '#FAC346',
      dark: '#00007D',
      light: '#FAE6EB'
    }
  },
  light: {
    colors: {
      background: '#FAE6EB',
      text: '#00007D',
      primary: '#FF0FAA',
      secondary: '#828CFA',
      accent: '#FF0FAA',
      dark: '#00007D',
      light: '#FAE6EB'
    }
  }
};