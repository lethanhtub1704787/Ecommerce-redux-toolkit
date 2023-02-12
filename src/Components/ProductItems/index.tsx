import {Text, Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';
import {Props} from './types';
import Favorite from 'react-native-vector-icons/AntDesign';

const ProductItems: React.FC<Props> = ({
  item,
  favoriteShow,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={item.image} />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.productPrice}>${item.productPrice}</Text>
      {favoriteShow && (
        <View style={styles.favoriteButton}>
          <Favorite
            name={item.isFavorite ? 'heart' : 'hearto'}
            style={styles.favoriteIcon}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.item.isFavorite !== data.item.isFavorite) {
    return false;
  }
  return true;
};
export default memo(ProductItems, areEqual);
