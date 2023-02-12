import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '@/Themes/Images';
import {styles} from './styles';
import {navigate, onGoBack} from '@/Navigation/NavigationAction';
import {useNavigation} from '@react-navigation/native';
type Props = {
  text?: string;
  drawer?: boolean;
  goBack?: boolean;
  notification?: boolean;
  favorite?: boolean;
  more?: boolean;
};

const CustomHeader: React.FC<Props> = ({
  text,
  drawer,
  goBack,
  notification,
  favorite,
  more,
}: Props) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    //@ts-ignore
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      {drawer ? (
        <TouchableOpacity onPress={openDrawer}>
          <Image source={Images.Drawer_1x} />
        </TouchableOpacity>
      ) : goBack ? (
        <TouchableOpacity onPress={() => onGoBack()}>
          <Image source={Images.goback_1x} />
        </TouchableOpacity>
      ) : (
        <View />
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
        <View />
      )}
    </View>
  );
};

export default CustomHeader;
