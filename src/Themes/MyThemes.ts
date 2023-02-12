import {DefaultTheme, Theme} from '@react-navigation/native';
import DarkColors from './Colors/DarkColors';
import DefaultColors from './Colors/DefaultColors';

export const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    ...DarkColors,
  },
};

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...DefaultColors,
  },
};

export type MyThemeTs = typeof LightTheme & Theme;
export type ColorTs = typeof DefaultColors;
