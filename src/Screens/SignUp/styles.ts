import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    height: windowHeight,
  },
  errorStyle: {
    marginTop: 5,
    color: 'red',
    fontSize: 13,
    fontWeight: '300',
  },
  image: {
    marginTop: 20,
    width: 54,
    height: 65,
  },
  titleStyle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Gordita',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 335,
    height: 57,
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    width: 48,
    height: 45,
    backgroundColor: 'rgba(246, 121, 82, 0.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailIcon: {
    width: 24,
    height: 24,
  },
  inputBox: {
    // backgroundColor: 'red',
    height: 57,
    width: 335 - 10 - 48,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 12,
    opacity: 0.5,
    fontWeight: '400',
    marginLeft: 5,
    color: '#000000',
  },
  termContainer: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    width: 335,
  },
  checkButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 5,
    borderColor: '#F67952',
  },
  checkedStyle: {
    width: 15,
    height: 15,
    borderRadius: 5,
  },
  acceptText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Gordita',
  },
  TermsButton: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Gordita',
  },

  buttonStyle: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#F67952',
    width: 205,
    height: 59,
    borderRadius: 133,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gordita',
    fontWeight: '500',
    lineHeight: 18.72,
    color: '#FFFFFF',
  },
  otherMethod: {
    flexDirection: 'row',
    marginTop: 30,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  underLine: {
    borderBottomWidth: 1,
    width: 90,
    marginHorizontal: 15,
  },
  orStyle: {
    color: '#230A06',
    fontSize: 12,
  },
  methodContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  fbBackground: {
    marginHorizontal: 20,
    width: 70,
    height: 70,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  fbStyle: {
    width: 32,
    height: 32,
  },
  gotAccContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  gotAccText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Gordita',
  },
  loginText: {
    color: '#000000',
    fontWeight: '600',
  },
});