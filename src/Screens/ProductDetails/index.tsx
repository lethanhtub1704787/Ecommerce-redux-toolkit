import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '@/Components/CustomHeader';
import {stylesFunc} from './styles';
import Header from './ProductDetailsHeader';
import {RouteProp, useRoute, useTheme} from '@react-navigation/native';
import {HomeStackParams} from '@/Navigation/NavigationTypes';
import {MyThemeTs} from '@/Themes/MyThemes';
import {useColor} from '@/Hooks/useColor';
import ChooseColorButton from './ChooseColorButton';
import CustomButton from '@/Components/CustomButton';
type routeProps = RouteProp<HomeStackParams, 'ProductDetails'>;
enum COLOR_LIST {
  color1,
  color2,
  color3,
  color4,
}
const ProductDetails = () => {
  const route = useRoute<routeProps>();
  const colors = useColor();
  const {id, image, isFavorite, productName, productPrice, description} =
    route.params.product;
  const styles = stylesFunc(colors);

  const [currentColor, setCurrentColor] = useState<Number>(COLOR_LIST.color1);

  const onChooseColor = (color: number) => {
    setCurrentColor(color);
  };

  const isColorFocused = (color: number) => {
    return currentColor === color;
  };
  return (
    <View style={{flex: 1}}>
      <Header isItemFavorite={isFavorite} itemId={id} />
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.productInfo}>
          <View style={styles.nameAndPrice}>
            <Text style={styles.productName}>{productName}</Text>
            <Text style={styles.productName}>${productPrice}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
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
            <CustomButton
              text="Add to Cart"
              onPress={() => Alert.alert('added to card')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
