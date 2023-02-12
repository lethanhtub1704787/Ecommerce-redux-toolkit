// RootNavigation.js
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createNavigationContainerRef();
export const routeNameRef = createRef();

export const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

export const onGoBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
export const resetScreen = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: name,
          params: params,
        },
      ],
    });
  }
};
export const pushScreen = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};
export const replaceScreen = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};
export const onTrackingScreen = (
  previousRouteName: string,
  currentRouteName: string,
) => {
  console.log(`${previousRouteName} =====> ${currentRouteName}`);
};
