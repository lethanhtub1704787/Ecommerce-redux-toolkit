import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  skip: string;
  currentStep: string;
  finalStep: boolean;
};

const OnboardingHeader: React.FC<Props> = ({
  skip,
  currentStep,
  finalStep,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <Text style={styles.textStyle}>{currentStep}</Text>
        <Text
          style={[
            styles.textStyle,
            {color: !finalStep ? 'rgba(0, 0, 0, 0.5)' : '#000000'},
          ]}>
          /3
        </Text>
      </View>
      <TouchableOpacity style={{marginHorizontal: 20}}>
        <Text style={styles.textStyle}>{skip}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingHeader;
