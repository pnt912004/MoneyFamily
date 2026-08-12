import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006e1c',
    onPrimary: '#ffffff',
    primaryContainer: '#4bae4f',
    onPrimaryContainer: '#003b0b',
    secondary: '#735c00',
    onSecondary: '#ffffff',
    secondaryContainer: '#fdd34d',
    onSecondaryContainer: '#725b00',
    tertiary: '#286b33',
    onTertiary: '#ffffff',
    tertiaryContainer: '#65a969',
    onTertiaryContainer: '#003b11',
    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#93000a',
    background: '#f8f9fa',
    onBackground: '#191c1d',
    surface: '#f8f9fa',
    onSurface: '#191c1d',
    surfaceVariant: '#e1e3e4',
    onSurfaceVariant: '#3f4a3c',
    outline: '#6f7a6b',
    outlineVariant: '#becab9',
    inverseSurface: '#2e3132',
    inverseOnSurface: '#f0f1f2',
    inversePrimary: '#78dc77',
    elevation: {
      level0: 'transparent',
      level1: '#f3f4f5',
      level2: '#edeeef',
      level3: '#e7e8e9',
      level4: '#e1e3e4',
      level5: '#d9dadb',
    },
  },
  roundness: 2, // Default roundness multiplier in paper
};

// Custom Spacing
export const spacing = {
  base: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  gutter: 16,
  marginMobile: 20,
  marginDesktop: 40,
};

// Custom BorderRadius (Tailwind equivalents)
export const borderRadius = {
  sm: 4,
  default: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};
