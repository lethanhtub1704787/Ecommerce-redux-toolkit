import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    height: 600,
    backgroundColor: '#FBFBFD',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  header: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#E5E5D5',
    padding: 10,
  },
  clearText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  filterText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
  closeText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  clearButton: {
    backgroundColor: '#E5E5E5',
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#E5E5E5',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  config: {
    flex: 1,
    // backgroundColor: 'red',
    padding: 10,
    justifyContent: 'space-between',
  },
  propertiesContainer: {
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    height: 80,
  },
  propertiesText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
  typeList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderValueText: {
    color: '#000000',
    fontSize: 14,
  },
});
