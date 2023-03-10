import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: 100,
    alignItems: 'center',
  },
  orderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  date: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
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
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
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
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  increaseButton: {
    backgroundColor: 'rgba(246, 121, 82, 0.15)',
    width: 30,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  increaseButtonText: {
    color: 'rgba(246, 121, 82, 1)',
    fontSize: 18,
  },
  quantityText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    width: 30,
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  deleteIcon: {
    fontSize: 20,
    color: 'red',
    marginHorizontal: 10,
  },
});
