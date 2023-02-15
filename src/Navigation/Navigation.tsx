import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onbroding from '@/Screens/Onbroding';
import Onbroding2 from '@/Screens/Onbroding2';
import Onbroding3 from '@/Screens/Onbroding3';
import Login from '@/Screens/Login';
import {AuthStackParams, HomeStackParams, Root} from './NavigationTypes';
import SignUp from '@/Screens/SignUp';
import {navigationRef} from './NavigationAction';
import {MyDrawer} from './Drawer';
import Home from '@/Screens/Home';
import SearchScreen from '@/Screens/Search';
import ProductDetails from '@/Screens/ProductDetails';
import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from '@/Themes/MyThemes';

const Stack = createNativeStackNavigator<Root>();

const RootStack = () => {
  const scheme = useColorScheme();
  console.log(scheme);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthStack">
        <Stack.Screen
          name="Onbroding1"
          component={Onbroding}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Onbroding2"
          component={Onbroding2}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Onbroding3"
          component={Onbroding3}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        {/* <Stack.Screen name="SearchStack" component={SearchStack} /> */}
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
        options={{animation: 'slide_from_left'}}
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
    </HomeStackNavigator.Navigator>
  );
};

// const Search = createNativeStackNavigator<SearchParams>();
// const SearchStack = () => {
//   return (
//     <Search.Navigator screenOptions={{headerShown: false}}>
//       <Search.Screen name="Home" component={Home} />
//       <Search.Screen name="Search" component={SearchScreen} />
//     </Search.Navigator>
//   );
// };

export default RootStack;
