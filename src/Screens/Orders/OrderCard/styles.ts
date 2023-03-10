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
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
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
});
