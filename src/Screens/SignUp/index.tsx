import React, {useEffect, useState} from 'react';
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
import {useAppDispatch, useAppSelector} from '@/Hooks/reduxHook';
import {
  selectErrorMessage,
  setErrorMessage,
  signUpRequest,
} from '@/Redux/Reducers/authReducer';

const SignUp = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [isChecked, setisChecked] = useState<boolean>(false);
  const disPatch = useAppDispatch();
  const errorMessage = useAppSelector(selectErrorMessage);

  const backgroundStyle = {
    backgroundColor: '#E5E5E5',
  };

  const handleSignUp = () => {
    if (name === '' || email === '' || password === '' || rePassword === '') {
      disPatch(setErrorMessage('You need to enter all the information'));
      return;
    }
    if (password !== rePassword) {
      disPatch(setErrorMessage('Password and re-password do not match'));
      return;
    }
    if (!isChecked) {
      disPatch(setErrorMessage('You need accept the Terms & Conditions'));
      return;
    }
    disPatch(
      signUpRequest({
        email: email,
        password: password,
        fisrtName: name,
        lastName: name,
        fullName: '',
        gender: 'male',
        preferredLanguage: 'vi',
      }),
    );
  };

  useEffect(() => {
    disPatch(setErrorMessage(''));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={Images.LoginIcon} />
        </View>
        <Text style={styles.titleStyle}>Sign Up</Text>
        <View style={{marginTop: 20}} />
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={Images.profile_1x} style={styles.emailIcon} />
          </View>
          <TextInput
            placeholder="Name"
            style={styles.inputBox}
            placeholderTextColor="#230A06"
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={Images.password_Icon} style={styles.emailIcon} />
          </View>
          <TextInput
            placeholder="Re-Password"
            style={styles.inputBox}
            placeholderTextColor="#230A06"
            value={rePassword}
            onChangeText={setRePassword}
            secureTextEntry={true}
          />
        </View>
        {errorMessage !== '' && (
          <Text style={styles.errorStyle}>{errorMessage}</Text>
        )}
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

        <TouchableOpacity style={styles.buttonStyle} onPress={handleSignUp}>
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
