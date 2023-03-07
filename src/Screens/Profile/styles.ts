import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    // backgroundColor: 'red',
    // position: 'absolute',
    alignSelf: 'center',
    marginTop: 50,
    // top: 100,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  nameText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },
  mailText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
  },
  statisticsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
  },
  personalInfo: {
    marginTop: 50,
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  personalContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  personalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  personalText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
    fontWeight: '400',
  },
  personalValue: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});
