import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {styles} from './style';
type Props = {
  alertText: string;
  isVisible: boolean;
  itemID: string;
  onClose: () => void;
  onYes: (cartItemID: string) => void;
  onNo: () => void;
};
const AlertModal: React.FC<Props> = ({
  alertText,
  isVisible,
  itemID,
  onClose,
  onYes,
  onNo,
}: Props) => {
  return (
    <ReactNativeModal
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn={'bounceIn'}
      animationOut={'bounceOut'}
      useNativeDriver={true}
      backdropOpacity={0.4}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.alertText}>{alertText}</Text>
        </View>
        <View style={styles.buttonList}>
          <TouchableOpacity
            style={styles.yesButton}
            onPress={() => onYes(itemID)}>
            <Text style={styles.alertText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noButton} onPress={onNo}>
            <Text style={styles.alertText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AlertModal;
