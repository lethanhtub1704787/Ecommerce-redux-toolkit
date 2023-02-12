import {ImageSourcePropType} from 'react-native';

export type SearchItemsParams = {
  id: number;
  productName: string;
  productPrice: number;
  image: ImageSourcePropType;
  isFavorite?: boolean;
};
export type Props = {
  item: SearchItemsParams;
  onPress: () => void;
};
