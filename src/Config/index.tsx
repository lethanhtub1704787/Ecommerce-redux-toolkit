import {
  Text,
  TextInput,
  LogBox,
  TextProps,
  TextInputProps,
  TextStyle,
  Platform,
} from 'react-native';

// Functions
import {setCustomText, setCustomTextInput} from './GlobalPropsFunctions';

// Styles
// import {Colors, Fonts, Normalize} from '@/Themes';

// Config Firebase Crashlytics

const textStyleDefault: TextStyle = {
  fontSize: 20,
  // fontFamily: Platform.OS === 'ios' ? Fonts.Telugu : Fonts.default,
  color: 'red',
  // includeFontPadding: false,
};

const customTextProps: TextProps = {
  style: {
    ...textStyleDefault,
  },
};
setCustomText(customTextProps);

const customTextInputProps: TextInputProps = {
  style: {
    ...textStyleDefault,
  },
  // selectionColor: Colors.black,
};
setCustomTextInput(customTextInputProps);

// Set defaultProps component react native
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps.underlineColorAndroid = 'rgba(0,0,0,0)';

LogBox.ignoreLogs([]);

if (!__DEV__) {
  console.log = () => {};
  console.error = () => {};
}
