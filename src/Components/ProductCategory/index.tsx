import {Text, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';
import {Props} from './types';

const ProductCategory: React.FC<Props> = ({
  item,
  isFocused,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.typeButton, isFocused && styles.focusedButton]}
      onPress={onPress}>
      <Image source={item.image} />
      <Text style={[styles.typeText, isFocused && styles.focusedText]}>
        {item.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.isFocused !== data.isFocused) {
    return false;
  }
  return true;
};
export default memo(ProductCategory, areEqual);
