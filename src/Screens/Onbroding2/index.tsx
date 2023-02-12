import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image} from 'react-native';

// import CustomButton from '@/Components/CustomButton';
import {styles} from './styles';
import {Images} from '@/Themes/Images';
import OnbrodingHeader from '@/Components/OnbrodingHeader';

const Onbroding2 = ({navigation}: {navigation: any}) => {
  const backgroundStyle = {
    backgroundColor: '#E5E5E5',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <OnbrodingHeader currentStep={'2'} skip={'Skip'} finalStep={false} />
      <View style={styles.container}>
        <Image source={Images.Onbroding2_pic} style={styles.image} />
        <Text style={styles.title}>Make Payment</Text>
        <Text style={styles.productIntro}>
          Payment is the transfer of money services in exchange product or
          Payments typically made terms agreed
        </Text>
        <View style={{marginTop: 40}} />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Onbroding3')}>
          <Text style={styles.buttonText}>Next</Text>
          <Image source={Images.dark_Stroke_1x} style={styles.strokeStyle} />
          <Image source={Images.light_Stroke_1x} style={styles.strokeStyle} />
        </TouchableOpacity>
        {/* <CustomButton text={'Next'} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Onbroding2;
