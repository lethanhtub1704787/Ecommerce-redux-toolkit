import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {styles} from './styles';
import {Images} from '@/Themes/Images';
import {navigate} from '@/Navigation/NavigationAction';
import OnboardingHeader from '@/Components/OnboardingHeader';
const Onboarding3 = () => {
  const backgroundStyle = {
    backgroundColor: '#E5E5E5',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <OnboardingHeader currentStep={'3'} skip={'Skip'} finalStep={true} />
      <View style={styles.container}>
        <Image source={Images.Onbroding3_pic} style={styles.image} />
        <Text style={styles.title}>Get Your Order</Text>
        <Text style={styles.productIntro}>
          Business or commerce an order is a stated intention either spoken to
          engage in a commercial transaction specific products
        </Text>
        <View style={{marginTop: 40}} />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigate('AuthStack')}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Image source={Images.dark_Stroke_1x} style={styles.strokeStyle} />
          <Image source={Images.dark_Stroke_1x} style={styles.strokeStyle} />
          <Image source={Images.light_Stroke_1x} style={styles.strokeStyle} />
        </TouchableOpacity>
        {/* <CustomButton text={'Next'} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding3;
