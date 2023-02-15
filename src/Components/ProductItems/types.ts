import {ImageSourcePropType} from 'react-native';

export type ProductColor = {
  color: string;
  image: ImageSourcePropType;
};

export type ProductParams = {
  id: number;
  productName: string;
  productPrice: number;
  image: ImageSourcePropType;
  isFavorite?: boolean;
  description: string;
  color?: ProductColor[];
};
export type Props = {
  item: ProductParams;
  favoriteShow?: boolean;
  onPress: () => void;
};
