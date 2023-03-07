/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, ViewStyle} from 'react-native';
import React, {memo} from 'react';
import {Images} from '@/Themes/Images';
import {styles} from './styles';
import {navigate, onGoBack} from '@/Navigation/NavigationAction';
import {useNavigation} from '@react-navigation/native';
import GoBack from 'react-native-vector-icons/Entypo';
type Props = {
  text?: string;
  drawer?: boolean;
  goBack?: boolean;
  notification?: boolean;
  favorite?: boolean;
  more?: boolean;
  background?: ViewStyle;
};

const CustomHeader: React.FC<Props> = ({
  text,
  drawer,
  goBack,
  notification,
  favorite,
  more,
  background,
}: Props) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    //@ts-ignore
    navigation.openDrawer();
  };
  console.log('re-render CustomHeader');
  return (
    <View style={[styles.container, background]}>
      {drawer ? (
        <TouchableOpacity onPress={openDrawer}>
          <Image source={Images.Drawer_1x} />
        </TouchableOpacity>
      ) : goBack ? (
        <TouchableOpacity onPress={() => onGoBack()}>
          <GoBack name="chevron-left" style={styles.goBack} />
        </TouchableOpacity>
      ) : (
        <View style={{marginLeft: 35}} />
      )}

      {text && <Text style={styles.title}>{text}</Text>}

      {notification ? (
        <TouchableOpacity>
          <Image source={Images.Notification_1x} />
          <Image source={Images.Circle_1x} style={styles.circle} />
        </TouchableOpacity>
      ) : more ? (
        <TouchableOpacity style={styles.more}>
          <Image source={Images.more_1x} />
        </TouchableOpacity>
      ) : favorite ? (
        <TouchableOpacity>
          <Image source={Images.Heart_1x} />
        </TouchableOpacity>
      ) : (
        <View style={{marginRight: 20}} />
      )}
    </View>
  );
};

export default memo(CustomHeader);
