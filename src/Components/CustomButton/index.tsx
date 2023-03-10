import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';

type Props = {
  text: string;
  buttonColor?: ViewStyle;
  textColor?: TextStyle;
  isDisable?: boolean;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({
  text,
  buttonColor,
  textColor,
  isDisable,
  onPress,
}: Props) => {
  console.log('re-render CustomButton');
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        buttonColor,
        isDisable === true && styles.disableBackground,
      ]}
      onPress={onPress}
      disabled={isDisable && isDisable}>
      <Text
        style={[
          styles.buttonText,
          textColor,
          isDisable === true && styles.textDisable,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// const areEqual = (preData: Props, data: Props) => {
//   if (preData.isDisable !== data.isDisable) {
//     return false;
//   }
//   return true;
// };

export default CustomButton;
