/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import Search from 'react-native-vector-icons/AntDesign';
import {Images} from '@/Themes/Images';
import {pushScreen} from '@/Navigation/NavigationAction';
import ProductItems from '@/Components/ProductItems';
import {ProductItemType} from '@/Types/productType';
import {useAppSelector} from '@/Hooks/reduxHook';
import {selectProduct} from '@/Redux/Reducers/productReducer';

const SearchScreen = () => {
  const productData = useAppSelector(selectProduct);
  const [searchResult, setSearchResult] = useState<Array<ProductItemType>>([]);
  const [searchText, setSearchText] = useState<string>('');

  const searchFilter = (text: string) => {
    if (text === 'All') {
      setSearchResult(productData);
    } else if (text) {
      const newData = productData.filter((item: {name: string}) => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchResult(newData);
    } else {
      setSearchResult([]);
    }
    setSearchText(text);
  };

  const keyExtractor = (item: ProductItemType) => {
    return 'key' + item.id;
  };

  const renderProduct = ({
    item,
    index,
  }: {
    item: ProductItemType;
    index: number;
  }) => {
    return (
      <ProductItems
        key={'product' + item.id + index}
        favoriteShow={false}
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
            value={searchText}
            onChangeText={text => searchFilter(text)}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Image source={Images.Filter_1x} />
          </TouchableOpacity>
        </View>
        <FlatList
          persistentScrollbar={true}
          keyExtractor={keyExtractor}
          renderItem={renderProduct}
          data={searchResult}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
