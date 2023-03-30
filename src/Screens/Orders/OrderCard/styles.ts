import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
  },
  itemInfoContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  itemImageContainer: {
    width: 84,
    height: 90,
    backgroundColor: 'rgba(62, 66, 41, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemInfo: {
    marginLeft: 15,
  },
  itemName: {
    width: 100,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  colorText: {
    fontSize: 14,
    color: '#A8A8A8',
    fontWeight: '400',
    width: 100,
  },
  orderDateContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  date: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
});
