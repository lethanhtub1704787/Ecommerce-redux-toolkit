import MyTabBar from '@/Components/CustomTabBar';
import {BottomTabLabel} from '@/Contants';
import Cart from '@/Screens/Cart';
import Favourites from '@/Screens/Favourite';
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
      <Tab.Screen name={BottomTabLabel.HOME} component={Home} />
      <Tab.Screen name={BottomTabLabel.CART} component={Cart} />
      <Tab.Screen name={BottomTabLabel.FAVOURITES} component={Favourites} />
      <Tab.Screen name={BottomTabLabel.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
