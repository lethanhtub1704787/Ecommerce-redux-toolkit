import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',

    height: windowHeight,
  },
  image: {
    fontSize: 40,
  },
});
