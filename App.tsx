/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import RootStack from '@/Navigation/Navigation';
import Language from '@/Language';
import {Provider} from 'react-redux';
import {persistor, store} from '@/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import GlobalLoading from '@/Components/Loading';
import {subjectLoadingAsObservable} from '@/Function/RxjsLoading';
import KeepAwake from '@sayem314/react-native-keep-awake';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const subscriptionLoading = subjectLoadingAsObservable.subscribe(status =>
      setIsLoading(() => status),
    );
    return () => subscriptionLoading.unsubscribe();
  }, []);
  return (
    <Provider store={store}>
      <KeepAwake />
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#E5E5E5'} />
          <RootStack />
          <Language />
          {isLoading && <GlobalLoading />}
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
