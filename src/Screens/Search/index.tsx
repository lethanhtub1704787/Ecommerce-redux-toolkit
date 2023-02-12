import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import Search from 'react-native-vector-icons/AntDesign';
import {Images} from '@/Themes/Images';
import {PRODUCT_DATA} from './models';
import {pushScreen} from '@/Navigation/NavigationAction';
import {ProductParams} from '@/Components/ProductItems/types';
import ProductItems from '@/Components/ProductItems';

const SearchScreen = () => {
  const keyExtractor = (item: ProductParams) => {
    return 'key' + item.id;
  };

  const renderProduct = ({
    item,
    index,
  }: {
    item: ProductParams;
    index: number;
  }) => {
    return (
      <ProductItems
        key={'product' + item.id + index}
        favoriteShow
        item={item}
        onPress={() => pushScreen('ProductDetails', {product: item})}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeader text="Search" goBack={true} notification={true} />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Search name="search1" style={styles.searchIcon} />
          <TextInput
            autoFocus={true}
            placeholder="Search items..."
            style={styles.searchInput}
            placeholderTextColor="rgba(0, 0, 0, 0.9)"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Image source={Images.Filter_1x} />
          </TouchableOpacity>
        </View>
        <FlatList
          // key={'#'}
          keyExtractor={keyExtractor}
          renderItem={renderProduct}
          data={PRODUCT_DATA}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
