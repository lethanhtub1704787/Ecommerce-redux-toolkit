import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeader from '@/Components/CustomHeader';
import {Images} from '@/Themes/Images';
import {styles} from './styles';
import StatisticsCard from './StatisticsCard';
import {Statistics} from '@/Contants';
import {useAppSelector} from '@/Hooks/reduxHook';
import {selectUserInfo} from '@/Redux/Reducers/authReducer';
const Profile = () => {
  const userInfo = useAppSelector(selectUserInfo);
  const {fullName, email, city, username, avatarImage, phone, gender} =
    userInfo;

  return (
    <View style={{flex: 1}}>
      <Image
        source={Images.Profile_background}
        style={StyleSheet.absoluteFill}
      />
      <CustomHeader
        goBack={true}
        text={'Profile'}
        more={true}
        background={{backgroundColor: 'transparent'}}
      />
      <TouchableOpacity style={styles.avatarContainer}>
        <Image source={{uri: avatarImage.url}} style={styles.avatar} />
      </TouchableOpacity>
      <View style={[styles.center, {marginTop: 20}]}>
        <Text style={styles.nameText}>{fullName}</Text>
        <Text style={styles.mailText}>{email}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.statisticsList}>
          <StatisticsCard
            text={Statistics.PROGRESS_ORDER}
            icon={Images.Statistics_order}
            countNumber={10}
          />
          <StatisticsCard
            text={Statistics.PROMOCODES}
            icon={Images.Statistics_promocodes}
            countNumber={5}
          />
          <StatisticsCard
            text={Statistics.REVIEWES}
            icon={Images.Statistics_reviewes}
            countNumber={4500}
          />
        </View>
        <Text style={styles.personalInfo}>Personal Information</Text>
        <View style={styles.personalContainer}>
          <View style={styles.personalRow}>
            <Text style={styles.personalText}>Name:</Text>
            <Text style={styles.personalValue}>{fullName}</Text>
          </View>
          <View style={styles.personalRow}>
            <Text style={styles.personalText}>Gender:</Text>
            <Text style={styles.personalValue}>{gender}</Text>
          </View>
          <View style={styles.personalRow}>
            <Text style={styles.personalText}>Email:</Text>
            <Text style={styles.personalValue}>{email}</Text>
          </View>
          <View style={styles.personalRow}>
            <Text style={styles.personalText}>Location:</Text>
            <Text style={styles.personalValue}>{city ? city : null}</Text>
          </View>
          <View style={styles.personalRow}>
            <Text style={styles.personalText}>Zip Code:</Text>
            <Text style={styles.personalValue}>1200</Text>
          </View>
          <View style={styles.personalRow}>
            <Text style={styles.personalText}>Phone Number:</Text>
            <Text style={styles.personalValue}>
              {phone ? phone.countryCode + phone.phoneNumber : null}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
