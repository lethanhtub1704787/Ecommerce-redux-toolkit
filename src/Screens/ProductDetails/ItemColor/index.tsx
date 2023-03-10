import {ProductRepresent} from '@/Types/productType';
import React, {memo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
type Props = {
  item: ProductRepresent;
  isFocused: boolean;
  onPress: () => void;
};

const ItemColor: React.FC<Props> = ({item, isFocused, onPress}: Props) => {
  return (
    <View style={[styles.buttonContainer, isFocused && styles.focusedStyle]}>
      <TouchableOpacity
        style={[styles.colorButton, {backgroundColor: item.value}]}
        onPress={onPress}
        disabled={isFocused}
      />
    </View>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.isFocused !== data.isFocused) {
    return false;
  }
  return true;
};

export default memo(ItemColor, areEqual);
