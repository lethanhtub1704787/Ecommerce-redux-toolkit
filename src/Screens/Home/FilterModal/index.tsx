import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import ReactNativeModal from 'react-native-modal';
import FilterButton from './FilterButton';
import CustomButton from '@/Components/CustomButton';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const FilterModal: React.FC<Props> = ({isVisible, onClose}: Props) => {
  const [filterSelected, setFilterSelected] = useState<number>(0);

  const handleFilterPress = (index: number) => {
    setFilterSelected(index);
  };
  const isSelectedFilter = (index: number) => {
    return filterSelected === index;
  };
  return (
    <ReactNativeModal
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationOut={'slideOutDown'}
      useNativeDriver={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
          <Text style={styles.filterText}>Filters</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.config}>
          <View style={styles.propertiesContainer}>
            <Text style={styles.propertiesText}>Category</Text>
            <View style={styles.typeList}>
              <FilterButton
                text="New Arrival"
                onPress={() => handleFilterPress(0)}
                isFocused={isSelectedFilter(0)}
              />
              <FilterButton
                text="Top Trending"
                onPress={() => handleFilterPress(1)}
                isFocused={isSelectedFilter(1)}
              />
              <FilterButton
                text="Featured Products"
                onPress={() => handleFilterPress(2)}
                isFocused={isSelectedFilter(2)}
              />
            </View>
          </View>

          <View style={styles.propertiesContainer}>
            <View style={styles.typeList}>
              <Text style={styles.propertiesText}>Pricing</Text>
              <Text style={styles.sliderValueText}>$50-$200</Text>
            </View>
            <View style={styles.slider}>
              <Text>(slider)</Text>
            </View>
          </View>

          <View style={styles.propertiesContainer}>
            <View style={styles.typeList}>
              <Text style={styles.propertiesText}>Distance</Text>
              <Text style={styles.sliderValueText}>500m-2Km</Text>
            </View>
            <View style={styles.typeList}>
              <Text>(slider)</Text>
            </View>
          </View>
          <View style={{alignSelf: 'center'}}>
            <CustomButton
              text={'Apply Filter'}
              onPress={() => Alert.alert('Applied Filter')}
            />
          </View>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default FilterModal;
