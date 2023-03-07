import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {styles} from './styles';
import Check from 'react-native-vector-icons/Entypo';
import Edit from 'react-native-vector-icons/Feather';
import {Props} from './types';

const AddressCard: React.FC<Props> = ({
  isSelected,
  item,
  onPressSelectAdress,
}: Props) => {
  const handleEdit = () => {};
  console.log('re-render');
  return (
    <View style={[styles.card, isSelected && styles.selectedBackground]}>
      <TouchableOpacity
        style={[
          styles.selectedAddress,
          isSelected && styles.selectedAddressBackground,
        ]}
        onPress={onPressSelectAdress}>
        {isSelected && <Check name="check" style={styles.checkIcon} />}
      </TouchableOpacity>
      <View style={styles.addressInfo}>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.phoneAndAdress}>{item.phoneNumber}</Text>
        <Text style={styles.phoneAndAdress}>{item.address}</Text>
      </View>
      <TouchableOpacity onPress={handleEdit}>
        <Edit name="edit" style={styles.editAdress} />
      </TouchableOpacity>
    </View>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.isSelected !== data.isSelected) {
    return false;
  }
  return true;
};

export default memo(AddressCard, areEqual);
