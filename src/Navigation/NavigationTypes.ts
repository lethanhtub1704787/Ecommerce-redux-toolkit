import {ProductParams} from '@/Components/ProductItems/types';
import {NavigatorScreenParams} from '@react-navigation/native';

export type Root = {
  Onbroding1: undefined;
  Onbroding2: undefined;
  Onbroding3: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  HomeStack: NavigatorScreenParams<HomeStackParams>;

  // SearchStack: NavigatorScreenParams<SearchParams>;
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

export type BottomTabParams = {
  Home: undefined;
  Cart: undefined;
  Like: undefined;
  Profile: undefined;
};

export type HomeStackParams = {
  Drawer: undefined;
  Search: undefined;
  ProductDetails: {product: ProductParams};
};

export type DrawerParams = {
  TabScreen: undefined;
};

export type SearchParams = {
  Home: undefined;
  Search: undefined;
};
