import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import {pushScreen} from '@/Navigation/NavigationAction';
import ProductItems from '@/Components/ProductItems';
import {ProductItemType} from '@/Types/productType';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParams} from '@/Navigation/NavigationTypes';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  clearSeeAllData,
  getProductByCategory,
  selectProductByCategory,
} from '@/Redux/Reducers/productReducer';
import {subjectLoading} from '@/Function/RxjsLoading';

type routeProps = RouteProp<HomeStackParams, 'SeeAllProduct'>;
const SeeAllProduct = () => {
  const route = useRoute<routeProps>();
  const {categoryID, categoryName} = route.params;
  const products: Array<ProductItemType> = useAppSelector(
    selectProductByCategory,
  );
  const dispatch = useAppDispatch();
  //   const productItems = useAppSelector(selectProduct);
  //   const [data, setData] = useState<Array<ProductItemType>>();

  //   const getData = (id: string) => {
  //     const productByCategory = productItems.filter(
  //       (item: {categoryIds: Array<string>}) => {
  //         const categoryIds = item.categoryIds;
  //         return categoryIds.includes(id);
  //       },
  //     );
  //     setData(productByCategory);
  //   };

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

  const getProduct = (id: string) => {
    dispatch(getProductByCategory(id));
  };

  useEffect(() => {
    subjectLoading.next(true);
    setTimeout(() => {
      getProduct(categoryID);
      subjectLoading.next(false);
    }, 0);
    return () => {
      dispatch(clearSeeAllData());
    };
  }, []);

  //   useEffect(() => {
  //     data ? subjectLoading.next(false) : subjectLoading.next(true);
  //     console.log('data: ', data);
  //   }, [data]);
  //   useEffect(() => {
  //     console.log('product by category: ', products);
  //   }, [products]);

  return (
    <View style={{flex: 1}}>
      <CustomHeader text={categoryName} goBack={true} />

      <View style={styles.container}>
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={products}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </View>
  );
};

export default SeeAllProduct;
