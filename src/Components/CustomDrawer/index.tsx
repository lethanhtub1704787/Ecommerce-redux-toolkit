import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {Images} from '@/Themes/Images';

import DrawerCard from './DrawerCard';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  selectAccessToken,
  selectUserData,
  signOut,
} from '@/Redux/Reducers/authReducer';
import {navigate, resetScreen} from '@/Navigation/NavigationAction';

type DrawerProps = {
  navigation: any;
};

const CustomDrawer: React.FC<DrawerProps> = ({navigation}: DrawerProps) => {
  const accessToken = useAppSelector(selectAccessToken);
  const userData = useAppSelector(selectUserData);
  const userInfo = userData?.user;
  const disPatch = useAppDispatch();

  const handleLogout = () => {
    disPatch(signOut(accessToken));
  };

  const handleMyFavorites = () => {
    navigate('Favourites');
  };

  const handleOrders = () => {
    Alert.alert('not done');
    // navigate('Orders');
    // navigation.toggleDrawer();
  };

  useEffect(() => {
    if (!accessToken) {
      resetScreen('AuthStack');
    }
  }, [accessToken]);
  console.log('full name: ', userInfo);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userContainer}>
        <Image
          source={{uri: userInfo?.avatarImage.url}}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userInfo?.fullName}</Text>
          <Text style={styles.userJob}>{userData?.roleName}</Text>
        </View>
        <Image source={Images.RightArrow_1x} style={styles.rightArrow} />
      </TouchableOpacity>
      <DrawerCard
        icon={Images.Heart_1x}
        name={'My favourites'}
        onPress={handleMyFavorites}
      />
      <DrawerCard
        icon={Images.Wallet_1x}
        name={'Wallets'}
        onPress={() => Alert.alert('not done')}
      />
      <DrawerCard
        icon={Images.Order_1x}
        name={'My orders'}
        onPress={handleOrders}
      />
      <DrawerCard
        icon={Images.Document_1x}
        name={'About us'}
        onPress={() => Alert.alert('not done')}
      />
      <DrawerCard
        icon={Images.Lock_1x}
        name={'Privacy policy'}
        onPress={() => Alert.alert('not done')}
      />
      <DrawerCard
        icon={Images.Setting_1x}
        name={'Settings'}
        onPress={() => Alert.alert('not done')}
      />
      <TouchableOpacity
        style={[styles.drawerCard, {marginTop: 50}]}
        onPress={handleLogout}>
        <View style={styles.iconContainer}>
          <Image source={Images.Logout_1x} style={styles.icon} />
        </View>
        <Text style={[styles.cardName, {opacity: 1}]}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.symbol}>
        <Image source={Images.LoginIcon} />
      </View>
    </View>
  );
};

export default CustomDrawer;
