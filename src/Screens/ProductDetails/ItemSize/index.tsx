import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';

type Props = {
  size: string;
  isFocused: boolean;
  onPress: () => void;
};

const ItemSize: React.FC<Props> = ({size, isFocused, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.sizeButton, isFocused && styles.focusedSize]}
      onPress={onPress}
      disabled={isFocused}>
      <Text style={styles.text}>{size}</Text>
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.isFocused !== data.isFocused) {
    return false;
  }
  return true;
};

export default memo(ItemSize, areEqual);
