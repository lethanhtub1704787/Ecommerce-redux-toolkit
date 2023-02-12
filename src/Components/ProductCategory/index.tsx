import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Props} from './types';

const ProductCategory: React.FC<Props> = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.typeButton} onPress={() => onPress(item)}>
      <Image source={item.image} />
      <Text style={styles.typeText}>{item.typeName}</Text>
    </TouchableOpacity>
  );
};

export default ProductCategory;
