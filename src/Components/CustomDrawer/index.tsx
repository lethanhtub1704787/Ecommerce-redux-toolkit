import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Images} from '@/Themes/Images';
import {MENU_NAME} from '@/Contants';
import DrawerCard from './DrawerCard';
type Props = {
  navigation: any;
};

const CustomDrawer: React.FC<Props> = ({navigation}: Props) => {
  const userName = 'Alex Nikiforov';
  const userJob = 'Fashion Designer';
  const [currentMenu, setcurrentMenu] = useState<number | null>(null);

  const isFocused = (card: number) => {
    return currentMenu === card;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userContainer}>
        <Image source={Images.avatar_1x} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userJob}>{userJob}</Text>
        </View>
        <Image source={Images.RightArrow_1x} style={styles.rightArrow} />
      </TouchableOpacity>
      <DrawerCard
        icon={Images.Heart_1x}
        name={'My favorites'}
        isFocused={isFocused(MENU_NAME.myFavorite)}
        onPress={() => setcurrentMenu(MENU_NAME.myFavorite)}
      />
      <DrawerCard
        icon={Images.Wallet_1x}
        name={'Wallets'}
        isFocused={isFocused(MENU_NAME.wallets)}
        onPress={() => setcurrentMenu(MENU_NAME.wallets)}
      />
      <DrawerCard
        icon={Images.Order_1x}
        name={'My orders'}
        isFocused={isFocused(MENU_NAME.orders)}
        onPress={() => setcurrentMenu(MENU_NAME.orders)}
      />
      <DrawerCard
        icon={Images.Document_1x}
        name={'About us'}
        isFocused={isFocused(MENU_NAME.aboutUs)}
        onPress={() => setcurrentMenu(MENU_NAME.aboutUs)}
      />
      <DrawerCard
        icon={Images.Lock_1x}
        name={'Privacy policy'}
        isFocused={isFocused(MENU_NAME.privacy)}
        onPress={() => setcurrentMenu(MENU_NAME.privacy)}
      />
      <DrawerCard
        icon={Images.Setting_1x}
        name={'Settings'}
        isFocused={isFocused(MENU_NAME.settings)}
        onPress={() => setcurrentMenu(MENU_NAME.settings)}
      />
      <TouchableOpacity style={[styles.drawerCard, {marginTop: 50}]}>
        <View style={styles.iconContainer}>
          <Image source={Images.Logout_1x} style={styles.icon} />
        </View>
        <Text style={[styles.cardName, {opacity: 1}]}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.symbol}>
        <Image source={Images.LoginIcon} />
      </View>
    </View>
  );
};

export default CustomDrawer;
