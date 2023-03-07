import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  icon: ImageSourcePropType;
  name: string;
  onPress: () => void;
};

const DrawerCard: React.FC<Props> = ({icon, name, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.drawerCard} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.cardName}>{name}</Text>
    </TouchableOpacity>
  );
};

export default DrawerCard;
