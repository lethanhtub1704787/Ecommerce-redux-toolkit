import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  text: string;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
