import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React, {CSSProperties, memo} from 'react';
import {styles} from './styles';

type Props = {
  text: string;
  buttonColor?: ViewStyle;
  textColor?: TextStyle;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({
  text,
  buttonColor,
  textColor,
  onPress,
}: Props) => {
  console.log('re-render CustomButton');
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonColor]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textColor]}>{text}</Text>
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  // if (preData.isSelected !== data.isSelected) {
  //   return false;
  // }
  return true;
};

export default memo(CustomButton, areEqual);
