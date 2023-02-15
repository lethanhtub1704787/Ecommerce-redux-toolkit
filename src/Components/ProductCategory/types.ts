import {ImageSourcePropType} from 'react-native';

export type Category = {
  id: number;
  image: ImageSourcePropType;
  categoryName: string;
};

export type Props = {
  item: Category;
  isFocused: boolean;
  onPress: () => void;
};
