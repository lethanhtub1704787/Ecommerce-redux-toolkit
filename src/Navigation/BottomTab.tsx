import MyTabBar from '@/Components/CustomTabBar';
import Cart from '@/Screens/Cart';
import Like from '@/Screens/Like';
import Home from '@/Screens/Home';
import Profile from '@/Screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Like" component={Like} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
