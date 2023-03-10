import {View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Favorite from 'react-native-vector-icons/AntDesign';
import GoBack from 'react-native-vector-icons/Entypo';
import {onGoBack} from '@/Navigation/NavigationAction';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  productFavourite,
  selectFavourites,
} from '@/Redux/Reducers/productReducer';

type DetailHeader = {
  productID: string;
};

const Header: React.FC<DetailHeader> = ({productID}: DetailHeader) => {
  const [isFavourite, setIsFavourite] = useState<boolean>();
  const favourites = useAppSelector(selectFavourites);
  const dispatch = useAppDispatch();
  const onFavourite = () => {
    dispatch(productFavourite(productID));
  };
  useEffect(() => {
    setIsFavourite(favourites.includes(productID));
  }, [favourites]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onGoBack()}>
        <GoBack name="chevron-left" style={styles.goBack} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.favoriteButton} onPress={onFavourite}>
        <Favorite
          name={isFavourite ? 'heart' : 'hearto'}
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
