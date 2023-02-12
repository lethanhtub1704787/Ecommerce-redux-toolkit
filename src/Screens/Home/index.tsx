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
import ProductItems from '@/Components/ProductItems';
import {PRODUCT_DATA, PRODUCT_TYPE} from './models';
import ProductCategory from '@/Components/ProductCategory';
import {Category} from '@/Components/ProductCategory/types';
import {navigate} from '@/Navigation/NavigationAction';
import {translate} from '@/Language';
const Home = () => {
  const keyExtractor = (item: Category) => {
    return 'key' + item.id;
  };

  const renderProductCategory = ({
    item,
    index,
  }: {
    item: Category;
    index: number;
  }) => {
    return (
      <ProductCategory
        key={'category' + item.id + index}
        item={item}
        onPress={() => Alert.alert('item pressed')}
      />
    );
  };

  const goSearch = () => {
    navigate('Search');
  };

  const onFilterPress = () => {};

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        text={translate('quantityProductAvailable', {quantity: 10})}
        drawer={true}
        notification={true}
      />
      <View style={styles.container}>
        <Text style={styles.explore}>Explore</Text>
        <Text style={styles.bestOutfit}>best Outfits for you</Text>
        <View style={styles.filterContainer}>
          <Search name="search1" style={styles.searchIcon} />
          <TouchableOpacity
            style={styles.searchInput}
            onPress={goSearch}
            activeOpacity={1}>
            <Text style={{color: 'rgba(0, 0, 0, 0.9)'}}>Search items...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
            <Image source={Images.Filter_1x} />
          </TouchableOpacity>
        </View>
        <View style={styles.clothesType}>
          <FlatList
            renderItem={renderProductCategory}
            data={PRODUCT_TYPE}
            keyExtractor={keyExtractor}
            horizontal
          />
        </View>
        <View style={styles.arrivalContainer}>
          <Text style={styles.textArrival}>New Arrival</Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arrivalList}>
          <FlatList
            renderItem={({item}) => (
              <ProductItems
                item={item}
                onPress={() => {
                  Alert.alert('product item pressed');
                }}
              />
            )}
            data={PRODUCT_DATA}
            horizontal
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
