import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '@/Screens/Onboarding';
import Onboarding2 from '@/Screens/Onboarding2';
import Onboarding3 from '@/Screens/Onboarding3';
import Login from '@/Screens/Login';
import {
  AuthStackParams,
  CheckoutParams,
  HomeStackParams,
  Root,
} from './NavigationTypes';
import SignUp from '@/Screens/SignUp';
import {navigationRef} from './NavigationAction';
import {MyDrawer} from './Drawer';
import Home from '@/Screens/Home';
import SearchScreen from '@/Screens/Search';
import ProductDetails from '@/Screens/ProductDetails';
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from '@/Themes/MyThemes';
import Splash from '@/Screens/Splash';
import Checkout from '@/Screens/Checkout';
import FinalCheckout from '@/Screens/Checkout/FinalCheckout';
import Orders from '@/Screens/Orders';

const Stack = createNativeStackNavigator<Root>();

const RootStack = () => {
  const scheme = useColorScheme();
  // const checkUserLoggin = async () => {
  //   const userLoggedIn = await isLoggedIn();
  //   console.log('is logged in: ', userLoggedIn);
  // };
  // useEffect(() => {
  //   checkUserLoggin();
  // }, []);

  console.log('scheme: ', scheme);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SplashScreen'}>
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Auth = createNativeStackNavigator<AuthStackParams>();
const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{animation: 'slide_from_right'}}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{animation: 'slide_from_right'}}
      />
    </Auth.Navigator>
  );
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParams>();
const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="Drawer" component={MyDrawer} />
      <HomeStackNavigator.Screen
        name="Search"
        component={SearchScreen}
        options={{animation: 'slide_from_right'}}
      />
      <HomeStackNavigator.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{animation: 'slide_from_right'}}
      />
      <HomeStackNavigator.Screen
        name="CheckoutStack"
        component={CheckoutStack}
        options={{animation: 'slide_from_right'}}
      />
      <HomeStackNavigator.Screen
        name="Orders"
        component={Orders}
        // options={{animation: 'slide_from_right'}}
      />
    </HomeStackNavigator.Navigator>
  );
};

const Search = createNativeStackNavigator<CheckoutParams>();
const CheckoutStack = () => {
  return (
    <Search.Navigator screenOptions={{headerShown: false}}>
      <Search.Screen name="Checkout" component={Checkout} />
      <Search.Screen name="FinalCheckout" component={FinalCheckout} />
    </Search.Navigator>
  );
};

export default RootStack;
