import {View, Text, Alert, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import CustomButton from '@/Components/CustomButton';
import ItemCard from '../../Components/ItemCard';
import {navigate} from '@/Navigation/NavigationAction';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  itemIncrement,
  setCartDefault,
  selectCartItems,
  itemDecrement,
  deleteCartItem,
} from '@/Redux/Reducers/cartReducer';
import {CartItem} from '@/Types/cartType';

const Cart = () => {
  const data = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  // const [data, setData] = useState<Array<CartItem>>(cart.products);
  const [subTotal, setSubTotal] = useState<number>(0);

  const keyExtractor = (item: CartItem) => {
    return 'key' + item.id;
  };
  const renderItem = ({item, index}: {item: CartItem; index: number}) => {
    return (
      <ItemCard
        key={index + item.id}
        cardType="cart"
        item={item}
        onPress={() => Alert.alert(item.productId)}
        increaseQuantity={() => increaseQuantity(item.productId)}
        decreaseQuantity={() => decreaseQuantity(item.productId)}
        deleteItem={() => handleDeleteItem(item.productId)}
      />
    );
  };

  const calculateSubtotal = () => {
    let total: number = 0;
    data?.map((item: CartItem) => {
      total += item.productOrder.defaultPrice.value * item.quantity;
    });
    setSubTotal(total);
  };

  const handleCheckout = () => {
    dispatch(setCartDefault());
    // navigate('CheckoutStack');
  };

  const handleDeleteItem = (productId: string) => {
    dispatch(deleteCartItem(productId));
  };

  const increaseQuantity = (productId: string) => {
    dispatch(itemIncrement(productId));
  };

  const decreaseQuantity = (productId: string) => {
    dispatch(itemDecrement(productId));
  };

  useEffect(() => {
    calculateSubtotal();
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <CustomHeader text={'My Cart'} goBack={true} />
      <View style={styles.container}>
        <View style={styles.flatlist}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={keyExtractor}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.subTotal}>
            <Text style={styles.subTotalText}>Subtotal:</Text>
            <Text style={styles.totalValue}>
              {new Intl.NumberFormat().format(subTotal) + ' ' + 'VNĐ'}
            </Text>
          </View>
          <View style={styles.checkoutButton}>
            <CustomButton text="Checkout" onPress={handleCheckout} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
