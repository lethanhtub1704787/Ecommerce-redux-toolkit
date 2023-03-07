import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Favorite from 'react-native-vector-icons/AntDesign';
import GoBack from 'react-native-vector-icons/Entypo';
import {onGoBack} from '@/Navigation/NavigationAction';

type DetailHeader = {
  isItemFavorite: boolean | undefined;
  itemId: string;
};

const Header: React.FC<DetailHeader> = ({
  isItemFavorite,
  itemId,
}: DetailHeader) => {
  const [isFavorite, setisFavorite] = useState<boolean | undefined>(
    isItemFavorite,
  );

  const onFavorite = () => {
    setisFavorite(!isFavorite);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onGoBack()}>
        <GoBack name="chevron-left" style={styles.goBack} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
        <Favorite
          name={isFavorite ? 'heart' : 'hearto'}
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
