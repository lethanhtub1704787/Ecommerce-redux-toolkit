import MyTabBar from '@/Components/CustomTabBar';
import Cart from '@/Screens/Cart';
import Favorites from '@/Screens/Favorite';
import Home from '@/Screens/Home';
import Profile from '@/Screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import {BottomTabParams} from './NavigationTypes';

// const getRouteName = (route: any) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//   // console.log((routeName))
//   if (routeName?.includes('Home')) {
//     return true;
//   }
//   return false;
// };

// const renderTabbar = (props: any) => {
//   const isHome = getRouteName(props.state.routeNames);
//   return !isHome && <MyTabBar {...props} />;
// };

const Tab = createBottomTabNavigator<BottomTabParams>();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
