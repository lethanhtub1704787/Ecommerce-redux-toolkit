import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  checkAccessToken,
  selectAccessToken,
  selectAuthData,
  setDefault,
} from '@/Redux/Reducers/authReducer';
import {resetScreen} from '@/Navigation/NavigationAction';
import {Images} from '@/Themes/Images';

const Splash = () => {
  const authState = useAppSelector(selectAuthData);
  const {isValidToken} = authState;
  const accessToken = useAppSelector(selectAccessToken);
  const disPatch = useAppDispatch();

  const checkToken = () => {
    if (accessToken) {
      disPatch(checkAccessToken(accessToken));
    } else {
      setTimeout(() => {
        resetScreen('AuthStack');
      }, 0);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    console.log('checking token');
    if (isValidToken === true) {
      setTimeout(() => {
        resetScreen('HomeStack');
      }, 0);
    } else {
      setTimeout(() => {
        disPatch(setDefault());
        resetScreen('AuthStack');
      }, 0);
    }
  }, [disPatch, isValidToken]);

  return (
    <View style={styles.container}>
      <Image source={Images.Splash_icon} style={styles.image} />
    </View>
  );
};

export default Splash;
