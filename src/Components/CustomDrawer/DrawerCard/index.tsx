import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Props} from './types';
import {styles} from './styles';
const DrawerCard: React.FC<Props> = ({
  icon,
  name,
  onPress,
  isFocused,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.drawerCard, isFocused && styles.focusedBackground]}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={[styles.cardName, isFocused && styles.focusedFont]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerCard;
