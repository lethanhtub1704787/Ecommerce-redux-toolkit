import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  outsideCircle: {
    backgroundColor: 'rgba(246, 121, 82, 1)',
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  middleCircle: {
    backgroundColor: '#FFFFFF',
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideCircle: {
    backgroundColor: 'rgba(246, 121, 82, 0.1)',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    color: 'rgba(246, 121, 82, 1)',
    fontSize: 40,
  },
  gz: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },
  payment: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});
