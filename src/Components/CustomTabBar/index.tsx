import React from 'react';
import {navigate} from '@/Navigation/NavigationAction';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Home from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Ionicons';
import Like from 'react-native-vector-icons/AntDesign';
import Profile from 'react-native-vector-icons/FontAwesome';

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
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
            {label === 'Home' ? (
              <Home
                name={isFocused ? 'home' : 'home-outline'}
                style={[
                  styles.iconStyle,
                  {color: isFocused ? '#F67952' : '#000000'},
                ]}
              />
            ) : label === 'Cart' ? (
              <Cart
                name={isFocused ? 'cart' : 'cart-outline'}
                style={[
                  styles.iconStyle,
                  {color: isFocused ? '#F67952' : '#000000'},
                ]}
              />
            ) : label === 'Like' ? (
              <Like
                name={isFocused ? 'heart' : 'hearto'}
                style={[
                  styles.iconStyle,
                  {color: isFocused ? '#F67952' : '#000000'},
                ]}
              />
            ) : label === 'Profile' ? (
              <Profile
                name={isFocused ? 'user' : 'user-o'}
                style={[
                  styles.iconStyle,
                  {color: isFocused ? '#F67952' : '#000000'},
                ]}
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
