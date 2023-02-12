/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
// import CustomButton from '@/Components/CustomButton';
import {styles} from './styles';
import {Images} from '@/Themes/Images';
import OnbrodingHeader from '@/Components/OnbrodingHeader';

const Onbroding = ({navigation}: {navigation: any}) => {
  const backgroundStyle = {
    backgroundColor: '#E5E5E5',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <OnbrodingHeader currentStep={'1'} skip={'Skip'} finalStep={false} />
      <View style={styles.container}>
        <Image source={Images.Onbroding1_pic} style={styles.image} />
        <Text style={styles.title}>Choose Product</Text>
        <Text style={styles.productIntro}>
          A product is the item offered for sale. A product can be a service or
          an item. It can be physical or in virtual or cyber form
        </Text>
        <View style={{marginTop: 40}} />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Onbroding2')}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={Images.light_Stroke_1x} style={styles.strokeStyle} />
        </TouchableOpacity>
        {/* <CustomButton text={'Next'} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Onbroding;
