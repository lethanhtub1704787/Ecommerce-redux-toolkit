import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  categoryButton: {
    // backgroundColor: 'red',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    // borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    width: 100,
    height: 150,
    alignItems: 'center',
    borderRadius: 16,
    marginRight: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  categoryName: {
    fontFamily: 'Gordita',
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
    opacity: 0.5,
    marginTop: 5,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  focusedButton: {
    backgroundColor: '#F67952',
    // borderWidth: 2,
    // width: 104,
    // borderColor: '#F67952',
  },
  focusedText: {
    fontWeight: 'bold',
    opacity: 1,
  },
});
