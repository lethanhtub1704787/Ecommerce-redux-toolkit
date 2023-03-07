/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, {memo} from 'react';
import {styles} from './styles';
import Check from 'react-native-vector-icons/Entypo';
type Props = {
  image: ImageSourcePropType;
  isSelected: boolean;
  onPress: () => void;
};

const PaymentMethodButton: React.FC<Props> = ({
  isSelected,
  image,
  onPress,
}: Props) => {
  console.log('re-render payment');
  return (
    <TouchableOpacity
      style={styles.methodButton}
      onPress={onPress}
      disabled={isSelected}>
      <Image source={image} />
      {isSelected && (
        <View style={styles.checked}>
          <Check name="check" style={styles.checkIcon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const areEqual = (preData: Props, data: Props) => {
  if (preData.isSelected !== data.isSelected) {
    return false;
  }
  return true;
};

export default memo(PaymentMethodButton, areEqual);
