import {
  View,
  FlatList,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import ProductItems from '@/Components/ProductItems';

import {pushScreen} from '@/Navigation/NavigationAction';
import {ProductItemType} from '@/Types/productType';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {selectProduct} from '@/Redux/Reducers/productReducer';
import {testIncrement} from '@/Redux/Reducers/cartReducer';

const Favorites = () => {
  const value = useAppSelector(state => state.cartState.testValue);
  const dispatch = useAppDispatch();

  const productItems = useAppSelector(selectProduct);
  const [productData, setProductData] = useState<Array<ProductItemType>>(
    productItems.filter(
      (item: {isFavorite: boolean}) => item.isFavorite === true,
    ),
  );
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

  const increment = () => {
    dispatch(testIncrement());
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeader text="Favorite" goBack={true} />
      <View style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor: 'blue', height: 30, width: 100}}
          onPress={increment}>
          <Text>Button</Text>
        </TouchableOpacity>
        <Text style={{color: '#000000', fontSize: 20}}>{value}</Text>
        {/* <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={productData}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
        /> */}
      </View>
    </View>
  );
};

export default Favorites;
