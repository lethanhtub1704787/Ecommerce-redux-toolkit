/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '@/Components/CustomHeader';
import {styles} from './styles';
import AddressCard from './AddressCard';
import {example_address} from './AddressCard/model';
import {Images} from '@/Themes/Images';
import CustomButton from '@/Components/CustomButton';
import {methods} from './PaymentMethodButton/methods';
import PaymentMethodButton from './PaymentMethodButton';
import {navigate} from '@/Navigation/NavigationAction';
import {RouteProp, useRoute} from '@react-navigation/native';
import {CheckoutParams} from '@/Navigation/NavigationTypes';

// type routeProps = RouteProp<CheckoutParams, 'Checkout'>;
const Checkout = () => {
  // const route = useRoute<routeProps>();
  const default_address_id = example_address[0].id;
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(740);
  const [totalPrice, setTotalPrice] = useState<number>(deliveryFee + subTotal);
  const [currentAddress, setCurrentAddress] =
    useState<string>(default_address_id);

  const [currentPayment, setCurrentPayment] = useState<string>('');

  const isSelectedPayment = (paymentID: string) => {
    return currentPayment === paymentID;
  };

  const handlePayment = (paymentID: string) => {
    setCurrentPayment(paymentID);
  };

  const isSelectedAddress = (addressID: string) => {
    return currentAddress === addressID;
  };

  const handleSelectAddress = (addressID: string) => {
    setCurrentAddress(addressID);
  };

  // const keyExtractor = (item: AddressProps) => {
  //   return 'key' + item.id;
  // };

  // const renderAddress = ({
  //   item,
  //   index,
  // }: {
  //   item: AddressProps;
  //   index: number;
  // }) => {
  //   return (
  //     <AddressCard
  //       key={'address' + index}
  //       item={item}
  //       isSelected={isSelectedAddress(item.id)}
  //       onPressSelectAdress={() => handleSelectAddress(item.id)}
  //     />
  //   );
  // };

  const renderMap = () => {
    return example_address.map(item => {
      return (
        <AddressCard
          key={'address' + item.id}
          item={item}
          isSelected={isSelectedAddress(item.id)}
          onPressSelectAdress={() => handleSelectAddress(item.id)}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader text={'Checkout'} goBack={true} />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          padding: 15,
        }}>
        <Text style={[styles.textContainer, {marginTop: 0}]}>
          Delivery address
        </Text>
        <View style={{width: '100%', marginTop: 10}}>{renderMap()}</View>
        {/* <View style={styles.addressFlatlist}>
          <FlatList
            renderItem={renderAddress}
            data={example_address}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
          />
        </View> */}

        <Text style={styles.textContainer}>Billing infomation</Text>
        <View style={styles.priceInfo}>
          <View style={styles.feeContainer}>
            <View style={styles.textBox}>
              <Text style={styles.feeText}>Delivery Fee</Text>
              <Text style={styles.feeText}>:</Text>
            </View>
            <Text style={styles.priceText}>${deliveryFee}</Text>
          </View>
          <View style={styles.feeContainer}>
            <View style={styles.textBox}>
              <Text style={styles.feeText}>Subtotal</Text>
              <Text style={styles.feeText}>:</Text>
            </View>
            <Text style={styles.priceText}>${subTotal}</Text>
          </View>
          <View style={[styles.feeContainer, styles.totalBorder]}>
            <View style={[styles.textBox, {marginTop: 5}]}>
              <Text style={styles.feeText}>Total</Text>
              <Text style={styles.feeText}>:</Text>
            </View>
            <Text style={styles.priceText}>${totalPrice}</Text>
          </View>
        </View>
        <Text style={styles.textContainer}>Payment Method</Text>
        <View style={styles.paymentMethod}>
          {methods.map(item => {
            return (
              <PaymentMethodButton
                key={item.id}
                image={item.image}
                isSelected={isSelectedPayment(item.id)}
                onPress={() => handlePayment(item.id)}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.buttonPayment}>
        <CustomButton
          text={'Continue Payment'}
          onPress={() => navigate('FinalCheckout')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
