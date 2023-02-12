import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTab from './BottomTab';
import {DrawerParams} from './NavigationTypes';
import CustomDrawer from '@/Components/CustomDrawer';

const Drawer = createDrawerNavigator<DrawerParams>();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabScreen"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="TabScreen" component={BottomTab} />
    </Drawer.Navigator>
  );
};
