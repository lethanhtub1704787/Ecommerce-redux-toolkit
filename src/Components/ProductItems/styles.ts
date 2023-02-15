import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 180,
    backgroundColor: 'rgba(255, 250, 247, 0.56);',
    borderRadius: 15,
    marginRight: 35,
  },
  productName: {
    color: '#000000',
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
