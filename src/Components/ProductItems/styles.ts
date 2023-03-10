import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 140,
    height: 200,
    backgroundColor: 'rgba(255, 250, 247, 0.56);',
    // backgroundColor: 'red',
    borderRadius: 15,
    marginHorizontal: 10,
    // flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  imageBox: {
    backgroundColor: 'rgba(135, 199, 185, 0.1)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  productName: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
  },
  productPrice: {
    color: '#000000',
    fontWeight: '800',
    fontFamily: 'Gordita',
    fontSize: 12,
  },
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  favoriteIcon: {
    color: 'red',
    fontSize: 16,
  },
  image: {
    width: 99,
    height: 132,
  },
});
