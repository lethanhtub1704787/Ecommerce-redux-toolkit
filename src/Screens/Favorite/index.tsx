import {
  View,
  FlatList,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import ProductItems from '@/Components/ProductItems';

import {pushScreen} from '@/Navigation/NavigationAction';
import {ProductItemType} from '@/Types/productType';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {selectFavourites, selectProduct} from '@/Redux/Reducers/productReducer';

const Favorites = () => {
  const favourites = useAppSelector(selectFavourites);
  const productItems = useAppSelector(selectProduct);
  const [data, setData] = useState<Array<ProductItemType>>();
  const getData = () => {
    const favouritesData = productItems.filter((item: ProductItemType) =>
      favourites.includes(item.id),
    );
    setData(favouritesData);
  };

  // const [productData, setProductData] = useState<Array<ProductItemType>>(
  //   productItems.filter(
  //     (item: {isFavorite: boolean}) => item.isFavorite === true,
  //   ),
  // );
  const keyExtractor = (item: ProductItemType) => {
    return 'key' + item.id;
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: ProductItemType;
    index: number;
  }) => {
    return (
      <ProductItems
        key={index}
        item={item}
        onPress={() => pushScreen('ProductDetails', {product: item})}
        favoriteShow={true}
      />
    );
  };
  useEffect(() => {
    getData();
  }, [favourites]);
  return (
    <View style={{flex: 1}}>
      <CustomHeader text="Favorite" goBack={true} />
      <View style={styles.container}>
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
        />
      </View>
    </View>
  );
};

export default Favorites;
