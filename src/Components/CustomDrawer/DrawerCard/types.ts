import {ImageSourcePropType} from 'react-native';

export type Props = {
  icon: ImageSourcePropType;
  name: string;
  onPress: () => void;
  isFocused: boolean;
};
