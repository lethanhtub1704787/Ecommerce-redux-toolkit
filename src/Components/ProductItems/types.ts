import {ImageSourcePropType} from 'react-native';

export type ProductParams = {
  id: number;
  productName: string;
  productPrice: number;
  image: ImageSourcePropType;
  isFavorite?: boolean;
};
export type Props = {
  item: ProductParams;
  favoriteShow?: boolean;
  onPress: () => void;
};
