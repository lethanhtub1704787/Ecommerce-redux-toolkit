/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import CustomButton from '@/Components/CustomButton';
import Onbroding from '@/Screens/Onbroding';
import CustomHeader from '@/Components/OnbrodingHeader';
import Onbroding2 from '@/Screens/Onbroding2';
import Onbroding3 from '@/Screens/Onbroding3';
import Splash from '@/Screens/Splash';
import Login from './src/Screens/Login';
import RootStack from '@/Navigation/Navigation';
import SignUp from '@/Screens/SignUp';
import Home from '@/Screens/Home';
import Language from '@/Language';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E5E5E5'} />
      {/* <Home /> */}
      <RootStack />
      <Language />
      {/* <Splash /> */}
      {/* <CustomHeader currentStep={'1'} skip={'Skip'} finalStep={false} /> */}
      {/* <Onbroding /> */}
      {/* <Onbroding2 /> */}
      {/* <Onbroding3 /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <CustomButton /> */}
    </View>
  );
};

export default App;
