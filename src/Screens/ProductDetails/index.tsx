/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {stylesFunc} from './styles';
import Header from './ProductDetailsHeader';
import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import {HomeStackParams} from '@/Navigation/NavigationTypes';
import {MyThemeTs} from '@/Themes/MyThemes';
import {useColor} from '@/Hooks/useColor';
import ItemColor from './ItemColor';
import CustomButton from '@/Components/CustomButton';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {addToCart} from '@/Redux/Reducers/cartReducer';
import {CartItem, ProductOrder} from '@/Types/cartType';
import {ProductRepresent, ProductSize} from '@/Types/productType';
import ItemSize from './ItemSize';
import {selectFavourites} from '@/Redux/Reducers/productReducer';
import {notifyMessage} from '@/Function/notifyMessage';

type routeProps = RouteProp<HomeStackParams, 'ProductDetails'>;
const ProductDetails = () => {
  // const data = useAppSelector(selectProductDetails);
  const route = useRoute<routeProps>();
  const {
    id,
    name,
    description,
    productRepresent,
    productsVariant,
    rate,
    isFavorite,
  } = route.params.product;

  const colors = useColor();
  const styles = stylesFunc(colors);
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
  const [currentSizeIndex, setCurrentSizeIndex] = useState<number>(-1);
  const [addCartDisable, setAddCartDisable] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const handleSelectColor = (colorIndex: number) => {
    setCurrentColorIndex(colorIndex);
    setCurrentSizeIndex(-1);
  };

  const handleSelectSize = (sizeIndex: number) => {
    // console.log('size index: ', sizeIndex);
    setCurrentSizeIndex(sizeIndex);
  };

  const isColorFocused = (colorIndex: number) => {
    return currentColorIndex === colorIndex;
  };

  const isSizeFocused = (sizeIndex: number) => {
    return currentSizeIndex === sizeIndex;
  };

  const handleAddToCart = () => {
    const productOrder: ProductOrder = {
      defaultPrice: productsVariant[currentColorIndex].defaultPrice,
      initPrice: productsVariant[currentColorIndex].initPrice,
      colorId: productsVariant[currentColorIndex].colorId,
      colorName: productsVariant[currentColorIndex].colorName,
      isDiscount: productsVariant[currentColorIndex].isDiscount,
      image: productsVariant[currentColorIndex].image,
      size: productsVariant[currentColorIndex].sizes[currentSizeIndex],
    };
    const itemToAdd: CartItem = {
      id: id + productOrder.colorId + productOrder.size.sizeId,
      productId: id,
      name: name,
      description: description,
      productOrder: productOrder,
      quantity: 1,
    };
    dispatch(addToCart(itemToAdd));
    notifyMessage('Added to cart');
  };

  const keyExtractorColor = (item: ProductRepresent) => {
    return 'key' + item.colorId;
  };

  const keyExtractorSize = (item: ProductSize) => {
    return 'key' + item.sizeId;
  };

  const renderColorList = ({
    item,
    index,
  }: {
    item: ProductRepresent;
    index: number;
  }) => {
    return (
      <ItemColor
        key={item.colorId + index}
        item={item}
        onPress={() => handleSelectColor(index)}
        isFocused={isColorFocused(index)}
      />
    );
  };

  const renderSizeList = ({
    item,
    index,
  }: {
    item: ProductSize;
    index: number;
  }) => {
    return (
      <ItemSize
        key={item.sizeId + index}
        size={item.sizeName}
        isFocused={isSizeFocused(index)}
        onPress={() => handleSelectSize(index)}
      />
    );
  };

  useEffect(() => {
    if (currentSizeIndex !== -1) {
      setAddCartDisable(false);
    } else {
      setAddCartDisable(true);
    }
  }, [currentSizeIndex]);

  return (
    <View style={{flex: 1}}>
      <Header productID={id} />
      <View style={styles.container}>
        <Image
          source={{uri: productsVariant[currentColorIndex].image.url}}
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
              height: 80,
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
            <FlatList
              data={productsVariant}
              renderItem={renderColorList}
              keyExtractor={keyExtractorColor}
              horizontal={true}
            />
          </View>
          <Text style={styles.textColor}>Sizes</Text>
          <View style={styles.colorButtonList}>
            <FlatList
              keyExtractor={keyExtractorSize}
              renderItem={renderSizeList}
              data={productsVariant[currentColorIndex].sizes}
              horizontal={true}
            />
          </View>
          <View style={styles.center}>
            <CustomButton
              text="Add to Cart"
              onPress={handleAddToCart}
              isDisable={addCartDisable}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
