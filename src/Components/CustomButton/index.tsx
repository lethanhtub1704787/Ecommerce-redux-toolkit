import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  text: string;
  image?: string;
  image2?: string;
  image3?: string;
};

const CustomButton: React.FC<Props> = ({text}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
