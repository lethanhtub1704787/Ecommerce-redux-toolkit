import {View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import ProductItems from '@/Components/ProductItems';

import {pushScreen} from '@/Navigation/NavigationAction';
import {ProductItemType} from '@/Types/productType';
import {useAppSelector} from '@/Hooks/reduxHook';
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

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No items!</Text>
      </View>
    );
  };
  useEffect(() => {
    getData();
  }, [favourites]);
  return (
    <View style={{flex: 1}}>
      <CustomHeader text="Favourite" goBack={true} />
      <View style={styles.container}>
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </View>
  );
};

export default Favorites;
