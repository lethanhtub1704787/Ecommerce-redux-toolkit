import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
type ColorButton = {
  color: string;
  isFocused: boolean;
  onPress: () => void;
};

const ChooseColorButton: React.FC<ColorButton> = ({
  color,
  isFocused,
  onPress,
}: ColorButton) => {
  return (
    <View style={[styles.buttonContainer, isFocused && styles.focusedStyle]}>
      <TouchableOpacity
        style={[styles.colorButton, {backgroundColor: color}]}
        onPress={onPress}
      />
    </View>
  );
};

export default ChooseColorButton;
