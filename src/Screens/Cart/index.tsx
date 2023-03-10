import {View, Text, Alert, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomHeader from '@/Components/CustomHeader';
import CustomButton from '@/Components/CustomButton';
import ItemCard from '../../Components/ItemCard';
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  updateQuantity,
  selectCart,
  deleteItem,
} from '@/Redux/Reducers/cartReducer';
import {CartItem} from '@/Types/cartType';
import {navigate} from '@/Navigation/NavigationAction';
import AlertModal from '@/Components/AlertModal';

const Cart = () => {
  const data = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const [subTotal, setSubTotal] = useState<number>(0);
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<string>('');
  const keyExtractor = (item: CartItem) => {
    return 'key' + item.id;
  };
  const renderItem = ({item, index}: {item: CartItem; index: number}) => {
    return (
      <ItemCard
        key={index + item.id}
        item={item}
        onPress={() => Alert.alert(item.id)}
        updateQuantity={updateQuantityState}
        deleteItem={() => handleDeleteItem(item.id)}
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
    navigate('CheckoutStack');
  };

  const handleDeleteItem = (cartItemID: string) => {
    setIdToDelete(cartItemID);
    setDeleteVisible(true);
  };

  const dispatchDeleteItem = (cartItemID: string) => {
    dispatch(deleteItem(cartItemID));
    setDeleteVisible(false);
  };

  const updateQuantityState = (cartItemID: string, value: number) => {
    dispatch(updateQuantity({cartItemID: cartItemID, value}));
  };

  const readyCheckout = () => {
    return data.length > 0;
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No items!</Text>
      </View>
    );
  };

  useEffect(() => {
    calculateSubtotal();
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <AlertModal
        alertText={'Delete this item?'}
        isVisible={deleteVisible}
        onClose={() => setDeleteVisible(false)}
        onNo={() => setDeleteVisible(false)}
        onYes={dispatchDeleteItem}
        itemID={idToDelete}
      />
      <CustomHeader text={'My Cart'} goBack={true} />
      <View style={styles.container}>
        <View style={styles.flatlist}>
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            renderItem={renderItem}
            data={data}
            keyExtractor={keyExtractor}
            ListEmptyComponent={renderEmpty}
            // ListEmptyComponent
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
            <CustomButton
              text="Checkout"
              onPress={handleCheckout}
              isDisable={!readyCheckout()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
