import {ColorTs} from '@/Themes/MyThemes';
import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
export const stylesFunc = (color: ColorTs) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#E5E5E5',
      // backgroundColor: color.backgroundColor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      // backgroundColor: 'red',
      width: 270,
      height: 360,
      marginBottom: 20,
      borderRadius: 20,
    },
    productInfo: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#FFFFFF',
      flex: 1,
      width: windowWidth,
      height: 350,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      justifyContent: 'space-between',
      padding: 20,
    },
    nameAndPrice: {
      // flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      // paddingHorizontal: 10,
    },
    productName: {
      color: 'rgba(0, 6, 10, 1)',
      fontFamily: 'Gordita',
      fontSize: 20,
      fontWeight: '500',
      // color: color.text,
    },
    productPrice: {
      color: 'rgba(0, 6, 10, 1)',
    },
    description: {
      color: 'rgba(0, 0, 0, 0.5)',
      textAlign: 'justify',
    },
    textColor: {
      color: 'rgba(0, 6, 10, 1)',
      fontFamily: 'Gordita',
      fontWeight: '400',
      fontSize: 14,
    },
    colorButtonList: {
      flexDirection: 'row',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
