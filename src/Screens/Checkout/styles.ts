import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 15,
  },
  textContainer: {
    marginTop: 30,
    alignSelf: 'flex-start',
    color: '#000000',
    fontSize: 20,
  },
  addressFlatlist: {
    width: '100%',
  },
  priceInfo: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  feeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    width: '100%',
  },
  feeText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
  },
  textBox: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: 100,
    justifyContent: 'space-between',
  },
  priceText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
  },
  totalBorder: {
    borderTopWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  paymentMethod: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
  },
  buttonPayment: {
    paddingVertical: 10,
    // position: 'absolute',
    bottom: 0,
    backgroundColor: '#E5E5E5',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
