import {MyThemeTs} from '@/Themes/MyThemes';
import {useTheme} from '@react-navigation/native';

export const useColor = () => {
  const {colors} = useTheme() as MyThemeTs;
  return colors;
};
