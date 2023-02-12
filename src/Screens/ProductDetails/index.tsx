import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomHeader from '@/Components/CustomHeader';
import {stylesFunc} from './styles';
import Header from './ProductDetailsHeader';
import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import {HomeStackParams} from '@/Navigation/NavigationTypes';
import {MyThemeTs} from '@/Themes/MyThemes';
import {useColor} from '@/Hooks/useColor';
type routeProps = RouteProp<HomeStackParams, 'ProductDetails'>;
const ProductDetails = () => {
  const route = useRoute<routeProps>();
  const colors = useColor();
  const {id, image, isFavorite, productName, productPrice} =
    route.params.product;
  const styles = stylesFunc(colors);
  console.log(colors);
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <Image source={image} />
        <Text style={styles.productName}>{productName}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;
