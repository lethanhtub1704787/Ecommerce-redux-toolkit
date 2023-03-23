/* eslint-disable react-hooks/exhaustive-deps */
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
import {useDebounce} from 'use-debounce';
import {notifyMessage} from '@/Function/notifyMessage';

type DetailHeader = {
  productID: string;
};

const Header: React.FC<DetailHeader> = ({productID}: DetailHeader) => {
  const favourites = useAppSelector(selectFavourites);
  const [isFavourite, setIsFavourite] = useState<boolean>();
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>();
  const [favoriteValue] = useDebounce(favoriteStatus, 300);

  const dispatch = useAppDispatch();
  const onFavourite = () => {
    setIsFavourite(!isFavourite);
    setFavoriteStatus(!isFavourite);
  };
  useEffect(() => {
    if (favoriteStatus !== undefined) {
      if (favoriteStatus === true) {
        notifyMessage('You liked this item');
      } else {
        notifyMessage('You unliked this item');
      }
      console.log('favorite status: ', favoriteStatus);
      dispatch(productFavourite(productID));
    }
  }, [favoriteValue]);

  useEffect(() => {
    setIsFavourite(favourites.includes(productID));
  }, []);
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
