import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
const GlobalLoading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewLoadingWrapper}>
        <ActivityIndicator size={30} color={'white'} />
      </View>
    </View>
  );
};

export default GlobalLoading;
