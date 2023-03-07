/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
// import CustomButton from '@/Components/CustomButton';
import styles from './styles';
import {Images} from '@/Themes/Images';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  loginRequest,
  selectAccessToken,
  setDefault,
  setErrorMessage,
} from '@/Redux/Reducers/authReducer';

import {resetScreen} from '@/Navigation/NavigationAction';
import HidePassword from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const authState = useAppSelector(state => state.authState);
  const {errorMessage} = authState;
  const accessToken = useAppSelector(selectAccessToken);

  const handleLogin = () => {
    if (email === '' || password === '') {
      dispatch(setErrorMessage('You must enter email and password'));
      return;
    }
    dispatch(loginRequest({email: email, password: password}));
  };

  useEffect(() => {
    dispatch(setErrorMessage(''));
  }, []);

  useEffect(() => {
    if (accessToken) {
      resetScreen('HomeStack');
    }
  }, [accessToken]);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image source={Images.LoginIcon} style={styles.image} />
        <Text style={styles.titleStyle}>Log in</Text>
        <View style={{marginTop: 30}} />
        <View style={styles.inputContainer}>
          <View style={styles.shadow}>
            <View style={styles.iconContainer}>
              <Image source={Images.email_Icon} style={styles.emailIcon} />
            </View>
          </View>

          <TextInput
            placeholder="Email"
            style={[
              styles.inputBox,
              email === '' ? styles.textPlaceHolderColor : null,
            ]}
            placeholderTextColor="#230A06"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={Images.password_Icon} style={styles.emailIcon} />
          </View>
          <TextInput
            placeholder="Password"
            style={[
              styles.inputBox,
              password === '' ? styles.textPlaceHolderColor : null,
            ]}
            placeholderTextColor="rgba(35, 10, 6, 1)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={[styles.center, styles.visiblePasswordButton]}
            onPress={() => setPasswordVisible(prev => !prev)}>
            <HidePassword
              name={passwordVisible ? 'visibility' : 'visibility-off'}
              style={styles.passwordVisible}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        {errorMessage !== '' && (
          <Text style={styles.errorStyle}>{errorMessage}</Text>
        )}
        <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            dispatch(setDefault());
          }}>
          <Text style={styles.buttonText}>Reset State</Text>
        </TouchableOpacity>
        <View style={styles.otherMethod}>
          <View style={styles.underLine} />
          <Text style={styles.orStyle}>Or</Text>
          <View style={styles.underLine} />
        </View>
        <View style={styles.methodContainer}>
          <TouchableOpacity style={styles.fbBackground}>
            <Image source={Images.fb_icon} style={styles.fbStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbBackground}>
            <Image source={Images.gg_icon} style={styles.fbStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.noAccContainer}>
          <Text style={styles.noAccText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {loadingSignIn === StatusLoading.LOADING && <GlobalLoading />} */}
    </SafeAreaView>
  );
};

export default Login;
