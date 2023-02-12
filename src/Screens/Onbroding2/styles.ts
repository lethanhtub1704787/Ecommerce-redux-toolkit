import {StyleSheet, Dimensions} from 'react-native';
// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    height: windowHeight,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Gordita',
  },
  productIntro: {
    fontFamily: 'Gordita',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.5)',
    lineHeight: 23,
    marginHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: 323,
    height: 325,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    backgroundColor: '#F77952',
    width: 218,
    height: 59,
    borderRadius: 133,
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gordita',
    fontWeight: '500',
    lineHeight: 18.72,
    color: '#FFFFFF',
    marginRight: 5,
  },
  strokeStyle: {
    marginLeft: 2,
    // position:'absolute',
  },
});
