import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {fixItemName} from '@/Function/FixItemNameLength';
import {CART_ITEM_NAME_MAX_LENGTH} from '@/Contants';
import {styles} from './styles';
import {CartItem} from '@/Types/cartType';

const OrderCard = () => {
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
      <View style={styles.orderStyle}>
        <Text style={styles.date}>Today</Text>
      </View>
    </View>
  );
};

export default OrderCard;
