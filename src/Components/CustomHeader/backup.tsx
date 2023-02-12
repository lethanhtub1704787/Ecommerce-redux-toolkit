import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '@/Themes/Images';
import {styles} from './styles';

type Props = {
  text: string;
  navigation: any;
};

const CustomHeader: React.FC<Props> = ({text, navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={Images.Drawer_1x} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity>
        <Image source={Images.Notification_1x} />
        <Image source={Images.Circle_1x} style={styles.circle} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
