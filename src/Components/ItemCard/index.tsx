import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {styles} from './styles';
import {CartItem} from '@/Types/cartType';
import DeleteIcon from 'react-native-vector-icons/FontAwesome5';
import {useDebounce} from 'use-debounce';
import {CART_ITEM_NAME_MAX_LENGTH} from '@/Contants';
import {fixItemName} from '@/Function/FixItemNameLength';
type Props = {
  item: CartItem;
  onPress: () => void;
  updateQuantity: (cartItemID: string, value: number) => void;
  deleteItem: () => void;
};

const ItemCard: React.FC<Props> = ({
  item,
  onPress,
  updateQuantity,
  deleteItem,
}: Props) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [value] = useDebounce(quantity, 1000);
  const price = item.productOrder.defaultPrice.value;
  const currency = item.productOrder.defaultPrice.currency;

  // console.log('re-render item card', item.quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  useEffect(() => {
    updateQuantity(item.id, value);
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
            {fixItemName(item.name, CART_ITEM_NAME_MAX_LENGTH)}
          </Text>
          <Text
            style={styles.colorText}
            numberOfLines={2}
            adjustsFontSizeToFit={true}>
            Color: {item.productOrder.colorName}
          </Text>
          <Text
            style={styles.colorText}
            numberOfLines={2}
            adjustsFontSizeToFit={true}>
            Size: {item.productOrder.size.sizeName}
          </Text>
          <Text style={styles.itemPrice}>
            {new Intl.NumberFormat().format(price) + ' ' + currency}
          </Text>
        </View>
      </View>

      <View style={styles.quantityStyle}>
        <TouchableOpacity
          style={styles.increaseButton}
          onPress={increaseQuantity}>
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
