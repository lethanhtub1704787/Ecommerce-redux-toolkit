import React, {useState} from 'react';
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
const SignUp = ({navigation}: {navigation: any}) => {
  const backgroundStyle = {
    backgroundColor: '#E5E5E5',
  };
  const [isChecked, setisChecked] = useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Image source={Images.LoginIcon} style={styles.image} />
        <Text style={styles.titleStyle}>Sign Up</Text>
        <View style={{marginTop: 30}} />
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={Images.profile_1x} style={styles.emailIcon} />
          </View>
          <TextInput
            placeholder="Name"
            style={styles.inputBox}
            placeholderTextColor="#230A06"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={Images.email_Icon} style={styles.emailIcon} />
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
        <View style={styles.termContainer}>
          <TouchableOpacity
            onPress={() => setisChecked(!isChecked)}
            style={styles.checkButton}>
            {!isChecked ? (
              <View style={styles.checkBox} />
            ) : (
              <Image source={Images.check_1x} style={styles.checkedStyle} />
            )}
          </TouchableOpacity>
          <Text style={styles.acceptText}>I accept all the </Text>
          <TouchableOpacity>
            <Text style={styles.TermsButton}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.otherMethod}>
          <View style={styles.underLine} />
          <Text style={styles.orStyle}>Or</Text>
          <View style={styles.underLine} />
        </View>
        <View style={styles.methodContainer}>
          <TouchableOpacity style={styles.fbBackground}>
            <Image source={Images.fb_icon} style={styles.fbStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbBackground}>
            <Image source={Images.gg_icon} style={styles.fbStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.gotAccContainer}>
          <Text style={styles.gotAccText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
