import {ColorTs} from '@/Themes/MyThemes';
import {StyleSheet} from 'react-native';
export const stylesFunc = (color: ColorTs) =>
  StyleSheet.create({
    container: {
      // backgroundColor: '#E5E5E5',
      backgroundColor: color.backgroundColor,
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    productName: {
      color: color.text,
    },
  });
