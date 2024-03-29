/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import Search from 'react-native-vector-icons/AntDesign';
import {Images} from '@/Themes/Images';
import ProductItems from '@/Components/ProductItems';
import ProductCategory from '@/Components/ProductCategory';
import {navigate, pushScreen} from '@/Navigation/NavigationAction';
// import {translate} from '@/Language';
import FilterModal from './FilterModal';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  getCategory,
  getProductData,
  selectCategory,
  selectProduct,
} from '@/Redux/Reducers/productReducer';
import {Category} from '@/Types/categoryType';
import {ProductItemType} from '@/Types/productType';

const Home = () => {
  const productItems: Array<ProductItemType> = useAppSelector(selectProduct);
  const category: Array<Category> = useAppSelector(selectCategory);

  const dispatch = useAppDispatch();
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [currentCategoryFocus, setCurrentCategoryFocus] = useState<String>();

  const [productData, setProductData] =
    useState<Array<ProductItemType>>(productItems);

  const handleSeeAll = () => {
    let categoryID: String;
    let categoryName: String | undefined;
    if (currentCategoryFocus) {
      const categorySelected = category.find(
        item => item.id === currentCategoryFocus,
      );
      categoryID = currentCategoryFocus;
      categoryName = categorySelected?.name;
    } else {
      categoryID = 'random';
      categoryName = 'All product';
    }
    navigate('SeeAllProduct', {
      categoryID: categoryID,
      categoryName: categoryName,
    });
  };

  const handleCategory = (categoryId: string) => {
    setCurrentCategoryFocus(categoryId);
    const data = productItems.filter((item: {categoryIds: Array<string>}) => {
      const categoryIds = item.categoryIds;
      return categoryIds.includes(categoryId);
    });
    setTimeout(() => {
      setProductData(data.slice(0, 5));
    }, 0);
  };

  const isCategoryFocus = (categoryId: string) => {
    return currentCategoryFocus === categoryId;
  };

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
        onPress={() => handleCategory(item.id)}
        isFocused={isCategoryFocus(item.id)}
      />
    );
  };

  const renderProductItem = ({
    item,
    index,
  }: {
    item: ProductItemType;
    index: number;
  }) => {
    return (
      <ProductItems
        key={'product' + item.id + index}
        item={item}
        onPress={() => pushScreen('ProductDetails', {product: item})}
      />
    );
  };

  const getData = async () => {
    await dispatch(getProductData());
    await dispatch(getCategory());
    // await dispatch(getCart(accessToken));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setProductData(productItems.slice(0, 5));
  }, [productItems]);

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        // text={translate('quantityProductAvailable', {quantity: 10})}
        text={'Home'}
        drawer={true}
        notification={true}
      />
      <FilterModal
        isVisible={filterVisible}
        onClose={() => setFilterVisible(false)}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.explore}>Explore</Text>
        <Text style={styles.bestOutfit}>best Outfits for you</Text>
        <View style={styles.filterContainer}>
          <View style={styles.searchContainer}>
            <Search name="search1" style={styles.searchIcon} />
            <TouchableOpacity
              style={styles.searchInput}
              onPress={() => {
                navigate('Search');
              }}
              activeOpacity={1}>
              <Text style={{color: 'rgba(0, 0, 0, 0.9)'}}>Search items...</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilterVisible(!filterVisible)}>
            <Image source={Images.Filter_1x} />
          </TouchableOpacity>
        </View>
        <View style={styles.clothesType}>
          <FlatList
            renderItem={renderProductCategory}
            data={category}
            keyExtractor={keyExtractor}
            horizontal
          />
        </View>
        <View style={styles.arrivalContainer}>
          <Text style={styles.textArrival}>New Arrival</Text>
          <TouchableOpacity onPress={handleSeeAll}>
            <Text style={styles.textSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.arrivalList}>
          <FlatList
            renderItem={renderProductItem}
            data={productData}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
