import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {fixItemName} from '@/Function/FixItemNameLength';
import {CART_ITEM_NAME_MAX_LENGTH} from '@/Contants';
import {styles} from './styles';

import {Images} from '@/Themes/Images';

const OrderCard = () => {
  const handleOnpressOrder = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.itemInfoContainer}>
        <TouchableOpacity
          style={styles.itemImageContainer}
          onPress={handleOnpressOrder}>
          <Image source={Images.Tshirt_1x} style={styles.itemImage} />
        </TouchableOpacity>
        <View style={styles.itemInfo}>
          <Text
            style={styles.itemName}
            numberOfLines={2}
            adjustsFontSizeToFit={true}>
            {fixItemName('ITEM NAME', CART_ITEM_NAME_MAX_LENGTH)}
          </Text>
          <Text
            style={styles.colorText}
            numberOfLines={2}
            adjustsFontSizeToFit={true}>
            Color: {'COLOR NAME'}
          </Text>
          <Text
            style={styles.colorText}
            numberOfLines={2}
            adjustsFontSizeToFit={true}>
            Size: {'SIZE'}
          </Text>
          <Text style={styles.itemPrice}>
            {new Intl.NumberFormat().format(9999) + ' ' + 'VND'}
          </Text>
        </View>
      </View>
      <View style={styles.orderDateContainer}>
        <Text style={styles.date}>Today</Text>
      </View>
    </View>
  );
};

export default OrderCard;
