import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  drawerCard: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 19,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(246, 121, 82, 0.1)',
  },
  cardName: {
    fontFamily: 'Gordita',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 15,
    opacity: 0.65,
  },
  focusedBackground: {
    backgroundColor: '#EBEBEB',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  focusedFont: {
    fontWeight: '900',
  },
});
