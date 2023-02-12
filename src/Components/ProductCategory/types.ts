import {ImageSourcePropType} from 'react-native';

export type Category = {
  id: number;
  image: ImageSourcePropType;
  typeName: string;
};

export type Props = {
  item: Category;
  onPress: Function;
};
