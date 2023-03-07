import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  flatlist: {
    // backgroundColor: 'red',
    width: '100%',
    height: '80%',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
    width: '100%',
  },
  checkoutButton: {
    marginTop: 20,
  },
  subTotal: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  subTotalText: {
    color: '#000000',
    fontSize: 16,
  },
  totalValue: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
});
