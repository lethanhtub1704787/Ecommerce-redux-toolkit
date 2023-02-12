import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
// import CustomButton from '@/Components/CustomButton';
import styles from './styles';
import {Images} from '@/Themes/Images';
const Login = ({navigation}: {navigation: any}) => {
  const backgroundStyle = {
    backgroundColor: '#E5E5E5',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Image source={Images.LoginIcon} style={styles.image} />
        <Text style={styles.titleStyle}>Log in</Text>
        <View style={{marginTop: 30}} />
        <View style={styles.inputContainer}>
          <View style={styles.shadow}>
            <View style={styles.iconContainer}>
              <Image source={Images.email_Icon} style={styles.emailIcon} />
            </View>
          </View>

          <TextInput
            placeholder="Email"
            style={styles.inputBox}
            placeholderTextColor="#230A06"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={Images.password_Icon} style={styles.emailIcon} />
          </View>
          <TextInput
            placeholder="Password"
            style={styles.inputBox}
            placeholderTextColor="#230A06"
          />
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.otherMethod}>
          <View style={styles.underLine} />
          <Text style={styles.orStyle}>Or</Text>
          <View style={styles.underLine} />
        </View>
        <View style={styles.methodContainer}>
          <View style={styles.fbBackground}>
            <Image source={Images.fb_icon} style={styles.fbStyle} />
          </View>
          <View style={styles.fbBackground}>
            <Image source={Images.gg_icon} style={styles.fbStyle} />
          </View>
        </View>
        <View style={styles.noAccContainer}>
          <Text style={styles.noAccText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
