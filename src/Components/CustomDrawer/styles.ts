import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    padding: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    // backgroundColor: 'blue',
  },
  avatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Gordita',
    color: '#000000',
  },
  userJob: {
    fontFamily: 'TT Commons',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  rightArrow: {
    marginLeft: 15,
  },
  drawerCard: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  cardName: {
    fontFamily: 'Gordita',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 15,
    opacity: 0.65,
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
  symbol: {
    bottom: 20,
    position: 'absolute',
    marginLeft: 20,
  },
});
