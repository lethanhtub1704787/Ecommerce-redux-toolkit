import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 20,
    fontFamily: 'Gordita',
    fontStyle: 'normal',
  },
  circle: {
    position: 'absolute',
    right: 1,
  },
  more: {
    // backgroundColor: 'red',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBack: {
    fontSize: 28,
    color: '#000000',
  },
});
