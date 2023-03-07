import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  indicatorStyle: {
    backgroundColor: '#F67952',
    height: 5,
    borderRadius: 2,
  },
  tabBarStyle: {
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
  },
  labelStyle: {
    fontWeight: '500',
    textTransform: 'none',
  },
  completedTabStyle: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 20,
    alignItems: 'center',
  },
});
