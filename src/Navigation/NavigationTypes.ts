import {CartItem} from '@/Types/cartType';
import {ProductItemType} from '@/Types/productType';
import {NavigatorScreenParams} from '@react-navigation/native';

export type Root = {
  SplashScreen: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
  HomeStack: NavigatorScreenParams<HomeStackParams>;
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

export type BottomTabParams = {
  Home: undefined;
  Cart: undefined;
  Favourites: undefined;
  Profile: undefined;
};

export type HomeStackParams = {
  Drawer: undefined;
  Search: undefined;
  ProductDetails: {product: ProductItemType};
  CheckoutStack: CheckoutParams;
  Orders: undefined;
};

export type DrawerParams = {
  TabScreen: undefined;
};

export type SearchParams = {
  Home: undefined;
  Search: undefined;
};

export type CheckoutParams = {
  Checkout: {cartItems: Array<CartItem>};
  FinalCheckout: undefined;
};
