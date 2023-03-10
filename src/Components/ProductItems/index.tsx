import {Text, Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';
import Favorite from 'react-native-vector-icons/AntDesign';
import {ProductItemType} from '@/Types/productType';

type Props = {
  item: ProductItemType;
  favoriteShow?: boolean;
  onPress: () => void;
};

const ProductItems: React.FC<Props> = ({
  item,
  favoriteShow,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageBox}>
        <Image
          source={{uri: item.productRepresent.image.url}}
          style={styles.image}
        />
        {favoriteShow && (
          <View style={styles.favoriteButton}>
            <Favorite name={'heart'} style={styles.favoriteIcon} />
          </View>
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>
          {item.productRepresent.defaultPrice.value +
            ' ' +
            item.productRepresent.defaultPrice.currency}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  // if (preData.item.isFavorite !== data.item.isFavorite) {
  //   return false;
  // }
  return true;
};
export default memo(ProductItems);
