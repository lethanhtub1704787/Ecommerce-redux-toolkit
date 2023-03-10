import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 120,
    width: 250,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  alertText: {
    color: '#000000',
    fontSize: 16,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yesButton: {
    backgroundColor: '#FF6565',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
  },
  noButton: {
    backgroundColor: '#CACACA',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
  },
});
