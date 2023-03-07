import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Statistics} from '@/Contants';

type Props = {
  icon: ImageSourcePropType;
  text: string;
  countNumber: number;
};

const StatisticsCard: React.FC<Props> = ({icon, text, countNumber}: Props) => {
  const getBackgroundIconColor = (cardText: string) => {
    let color = '';
    switch (cardText) {
      case Statistics.PROGRESS_ORDER:
        color = 'rgba(246, 121, 82, 0.07)';
        break;
      case Statistics.PROMOCODES:
        color = 'rgba(14, 162, 246, 0.07)';
        break;
      case Statistics.REVIEWES:
        color = 'rgba(255, 193, 7, 0.07)';
        break;
    }
    return color;
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconBackground,
          {backgroundColor: getBackgroundIconColor(text)},
        ]}>
        <Image source={icon} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.countNum}>{countNumber}</Text>
    </View>
  );
};

export default StatisticsCard;
