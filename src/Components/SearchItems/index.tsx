import {Text, Image, TouchableOpacity, View} from 'react-native';
import React, {memo, useState} from 'react';
import {styles} from './styles';
import {Props} from './types';
import Favorite from 'react-native-vector-icons/AntDesign';

const SearchItems: React.FC<Props> = ({item, onPress}: Props) => {
  // const [isFavorite, setisFavorite] = useState<Boolean | undefined>(
  //   item.isFavorite,
  // );
  // const onFavorite = () => {
  //   setisFavorite(!isFavorite);
  // };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={item.image} />
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>${item.productPrice}</Text>
        <View style={styles.favoriteButton}>
          <Favorite
            name={item.isFavorite ? 'heart' : 'hearto'}
            style={styles.favoriteIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.item.isFavorite !== data.item.isFavorite) {
    return false;
  }
  return true;
};
export default memo(SearchItems, areEqual);
