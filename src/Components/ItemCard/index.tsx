import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {styles} from './styles';
import {Images} from '@/Themes/Images';
import {ProductItemType} from '@/Types/productType';
import {CartItem} from '@/Types/cartType';
import {useAppDispatch} from '@/Hooks/reduxHook';
import {itemIncrement} from '@/Redux/Reducers/cartReducer';
import DeleteIcon from 'react-native-vector-icons/FontAwesome5';
import {useDebounce} from 'use-debounce';
type Props = {
  item: CartItem;
  cardType: 'cart' | 'order';
  onPress: () => void;
  increaseQuantity: (productId: string, value: number) => void;
  decreaseQuantity: () => void;
  deleteItem: () => void;
};

const ItemCard: React.FC<Props> = ({
  item,
  cardType,
  onPress,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}: Props) => {
  // const renderOrderDate = item => {
  //   return (
  //     <View style={styles.orderStyle}>
  //       <Text style={styles.date}>Today</Text>
  //     </View>
  //   );
  // };
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [value] = useDebounce(quantity, 1000);
  const price = item.productOrder.defaultPrice.value;
  const currency = item.productOrder.defaultPrice.currency;

  console.log('re-render item card', item.quantity);

  const updateQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    increaseQuantity(item.productId, value);
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={styles.itemInfoContainer}>
        <TouchableOpacity style={styles.itemImageContainer} onPress={onPress}>
          <Image
            source={{uri: item.productOrder.image.url}}
            style={styles.itemImage}
          />
        </TouchableOpacity>
        <View style={styles.itemInfo}>
          <Text
            style={styles.itemName}
            numberOfLines={2}
            adjustsFontSizeToFit={true}>
            {item.name}
          </Text>
          <Text style={styles.itemPrice}>
            {new Intl.NumberFormat().format(price) + ' ' + currency}
          </Text>
        </View>
      </View>

      <View style={styles.quantityStyle}>
        <TouchableOpacity
          style={styles.increaseButton}
          onPress={updateQuantity}>
          <Text style={styles.increaseButtonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText} adjustsFontSizeToFit={true}>
          {quantity}
        </Text>

        <TouchableOpacity
          style={styles.increaseButton}
          onPress={decreaseQuantity}>
          <Text style={styles.increaseButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={deleteItem}>
        <DeleteIcon name="trash-alt" style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.item.quantity !== data.item.quantity) {
    return false;
  }
  return true;
};

export default memo(ItemCard, areEqual);
