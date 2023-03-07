import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';

type Props = {
  text: string;
  onPress: () => void;
  isFocused: boolean;
  styleProps?: ViewStyle;
};

const FilterButton: React.FC<Props> = ({
  text,
  onPress,
  isFocused,
  styleProps,
}) => {
  console.log('re-render FilterButton');
  return (
    <TouchableOpacity
      style={[styles.button, isFocused && styles.buttonFocused, styleProps]}
      onPress={onPress}>
      <Text style={[styles.text, isFocused && styles.textFocused]}>{text}</Text>
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.isFocused !== data.isFocused) {
    return false;
  }
  return true;
};
export default memo(FilterButton, areEqual);
