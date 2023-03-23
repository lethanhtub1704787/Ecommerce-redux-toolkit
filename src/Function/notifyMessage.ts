import {ToastAndroid} from 'react-native';

export const notifyMessage = (message: string) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
};
