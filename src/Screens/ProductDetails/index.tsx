/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {stylesFunc} from './styles';
import Header from './ProductDetailsHeader';
import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import {HomeStackParams} from '@/Navigation/NavigationTypes';
import {MyThemeTs} from '@/Themes/MyThemes';
import {useColor} from '@/Hooks/useColor';
import ChooseColorButton from './ChooseColorButton';
import CustomButton from '@/Components/CustomButton';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {addToCart} from '@/Redux/Reducers/cartReducer';
import {selectAccessToken} from '@/Redux/Reducers/authReducer';
import {ProductAddToCart} from '@/Types/cartType';

enum COLOR_LIST {
  color1,
  color2,
  color3,
  color4,
}
type routeProps = RouteProp<HomeStackParams, 'ProductDetails'>;
const ProductDetails = () => {
  const route = useRoute<routeProps>();
  const colors = useColor();
  const {id, productRepresent, isFavorite, name, description} =
    route.params.product;
  const styles = stylesFunc(colors);

  const [currentColor, setCurrentColor] = useState<Number>(COLOR_LIST.color1);
  const accessToken = useAppSelector(selectAccessToken);
  const dispatch = useAppDispatch();

  const onChooseColor = (color: number) => {
    setCurrentColor(color);
  };

  const isColorFocused = (color: number) => {
    return currentColor === color;
  };

  const handleAddToCart = () => {
    const product: ProductAddToCart = {
      productId: id,
      sizeId: productRepresent.sizes[0].sizeId,
      colorId: productRepresent.colorId,
      quantity: 1,
    };
    console.log('acccessToken: ', accessToken);
    dispatch(addToCart({accessToken, product}));
  };
  return (
    <View style={{flex: 1}}>
      <Header isItemFavorite={isFavorite} itemId={id} />
      <View style={styles.container}>
        <Image
          source={{uri: productRepresent.image.url}}
          style={styles.image}
        />
        <View style={styles.productInfo}>
          <View style={styles.nameAndPrice}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productName}>
              {productRepresent.defaultPrice.value +
                ' ' +
                productRepresent.defaultPrice.currency}
            </Text>
          </View>
          <View
            style={{
              height: 100,
            }}>
            <ScrollView
              contentContainerStyle={{
                alignItems: 'center',
                flexGrow: 1,
              }}>
              <Text style={styles.description}>{description}</Text>
            </ScrollView>
          </View>

          <Text style={styles.textColor}>Colors</Text>
          <View style={styles.colorButtonList}>
            <ChooseColorButton
              color={'#000000'}
              onPress={() => onChooseColor(COLOR_LIST.color1)}
              isFocused={isColorFocused(COLOR_LIST.color1)}
            />
            <ChooseColorButton
              color={'#BEE8EA'}
              onPress={() => onChooseColor(COLOR_LIST.color2)}
              isFocused={isColorFocused(COLOR_LIST.color2)}
            />
            <ChooseColorButton
              color={'#CEE3F5'}
              onPress={() => setCurrentColor(COLOR_LIST.color3)}
              isFocused={isColorFocused(COLOR_LIST.color3)}
            />
            <ChooseColorButton
              color={'#F4E5C3'}
              onPress={() => setCurrentColor(COLOR_LIST.color4)}
              isFocused={isColorFocused(COLOR_LIST.color4)}
            />
          </View>
          <View style={styles.center}>
            <CustomButton text="Add to Cart" onPress={handleAddToCart} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
