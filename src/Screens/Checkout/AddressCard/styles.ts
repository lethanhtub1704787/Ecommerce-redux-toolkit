import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    height: 86,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    marginVertical: 5,
  },
  selectedBackground: {
    backgroundColor: '#FFFFFF',
  },
  selectedAddress: {
    width: 24,
    height: 24,
    borderWidth: 0.3,
    borderColor: '#000000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedAddressBackground: {
    backgroundColor: '#F67952',
  },
  checkIcon: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  addressInfoContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addressInfo: {
    marginLeft: 30,
    height: '100%',
    width: '40%',
    justifyContent: 'space-between',
  },
  location: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  phoneAndAdress: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
  },
  editAdress: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
