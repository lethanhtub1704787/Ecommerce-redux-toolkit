export enum MENU_NAME {
  myFavorite,
  wallets,
  orders,
  aboutUs,
  privacy,
  settings,
}

export const CART_ITEM_NAME_MAX_LENGTH: number = 30;

export enum BottomTabLabel {
  HOME = 'Home',
  CART = 'Cart',
  FAVOURITES = 'Favourites',
  PROFILE = 'Profile',
}

export enum StatusRequest {
  GET = 200,
  POST = 201,
  PUT = 200,
  DELETE = 200,
}

export enum StatusLoading {
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  NONE = 'none',
}

export enum Statistics {
  PROGRESS_ORDER = 'Progress order',
  PROMOCODES = 'Promocodes',
  REVIEWES = 'Reviewes',
}
