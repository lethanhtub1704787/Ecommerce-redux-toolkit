export enum MENU_NAME {
  myFavorite,
  wallets,
  orders,
  aboutUs,
  privacy,
  settings,
}

export enum PRODUCT_CATEGORY {
  dress,
  shirt,
  pants,
  tshirt,
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

export enum StorageKey {
  userInfo = 'userInfo',
  accessToken = 'accessToken',
  refreshToken = 'refreshToken',
}

export enum Statistics {
  PROGRESS_ORDER = 'Progress order',
  PROMOCODES = 'Promocodes',
  REVIEWES = 'Reviewes',
}
