import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/Images/Splash/Vector.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Splash;
