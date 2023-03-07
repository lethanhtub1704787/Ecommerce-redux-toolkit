import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  iconStyle: {
    fontSize: 28,
    // color: '#F67952',
  },
  tabBarIcon: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  tabBarBadge: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    right: -5,
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 10,
  },
});
