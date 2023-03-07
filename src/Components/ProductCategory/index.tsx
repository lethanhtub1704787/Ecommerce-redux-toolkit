import {Text, TouchableOpacity, Image, View} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';
import {Category} from '@/Types/categoryType';

export type Props = {
  item: Category;
  isFocused: boolean;
  onPress: () => void;
};

const ProductCategory: React.FC<Props> = ({
  item,
  isFocused,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.categoryButton, isFocused && styles.focusedButton]}
      onPress={onPress}>
      <Image source={{uri: item.image.url}} style={styles.categoryImage} />
      <View style={styles.nameContainer}>
        <Text style={[styles.categoryName, isFocused && styles.focusedText]}>
          {item.name}
        </Text>
      </View>
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
