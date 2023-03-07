import {View, Text, Alert} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Check from 'react-native-vector-icons/Entypo';
import CustomButton from '@/Components/CustomButton';
import {resetScreen} from '@/Navigation/NavigationAction';
const FinalCheckout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outsideCircle}>
        <View style={styles.middleCircle}>
          <View style={styles.insideCircle}>
            <Check name="check" style={styles.checkIcon} />
          </View>
        </View>
      </View>
      <Text style={styles.gz}>Congratulations!!!</Text>
      <Text style={styles.payment}>
        Payment is the transfer of money services in exchange product or
        Payments
      </Text>
      <CustomButton
        text={'Get your receipt'}
        onPress={() => Alert.alert('Get your receipt')}
      />
      <View style={{height: 20}} />
      <CustomButton
        text={'Back to Home'}
        onPress={() => resetScreen('HomeStack')}
        buttonColor={{backgroundColor: 'rgba(255, 233, 226, 1)'}}
        textColor={{color: 'rgba(246, 121, 82, 1)'}}
      />
    </View>
  );
};

export default FinalCheckout;
