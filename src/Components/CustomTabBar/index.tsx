/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {navigate} from '@/Navigation/NavigationAction';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import Home from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Ionicons';
import Favorites from 'react-native-vector-icons/AntDesign';
import Profile from 'react-native-vector-icons/FontAwesome';
import {useAppSelector} from '@/Hooks/reduxHook';
import {selectCart} from '@/Redux/Reducers/cartReducer';
import {BottomTabLabel} from '@/Contants';

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  // const cartItems: CartType = useAppSelector(selectCart);
  const cartItems = useAppSelector(selectCart);
  const renderIcon = (label: any, isFocused: boolean) => {
    switch (label) {
      case BottomTabLabel.HOME:
        return (
          <View style={styles.tabBarIcon}>
            <Home
              name={isFocused ? 'home' : 'home-outline'}
              style={[
                styles.iconStyle,
                {color: isFocused ? '#F67952' : '#000000'},
              ]}
            />
          </View>
        );
      case BottomTabLabel.CART:
        return (
          <View style={styles.tabBarIcon}>
            <Cart
              name={isFocused ? 'cart' : 'cart-outline'}
              style={[
                styles.iconStyle,
                {color: isFocused ? '#F67952' : '#000000'},
              ]}
            />
            {cartItems?.length > 0 && (
              <View style={styles.tabBarBadge}>
                <Text style={styles.badgeText}>{cartItems?.length}</Text>
              </View>
            )}
          </View>
        );
      case BottomTabLabel.FAVOURITES:
        return (
          <Favorites
            name={isFocused ? 'heart' : 'hearto'}
            style={[
              styles.iconStyle,
              {color: isFocused ? '#F67952' : '#000000'},
            ]}
          />
        );
      case BottomTabLabel.PROFILE:
        return (
          <Profile
            name={isFocused ? 'user' : 'user-o'}
            style={[
              styles.iconStyle,
              {color: isFocused ? '#F67952' : '#000000'},
            ]}
          />
        );
    }
  };

  if (state.index === 0) {
    return (
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={'button' + index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={1}
              style={styles.tabBarButton}>
              {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
              {renderIcon(label, isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default MyTabBar;
