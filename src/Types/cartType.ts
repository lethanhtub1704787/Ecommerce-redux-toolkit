import {
  ProductImage,
  ProductItemType,
  ProductPrice,
  ProductSize,
} from './productType';

export type DeliveryType = {
  addressId: string;
  fee: number | null;
  shippingUnit: string;
};

export type PromotionsType = {
  id: string;
  typePromotion: string;
  price: number | null;
  code: string;
  status: string;
  subjectUse: string;
  dateExpired: string;
  quantity: number;
  name: string;
};

export type ProductOrder = {
  defaultPrice: ProductPrice;
  initPrice: ProductPrice;
  colorId: string;
  colorName: string;
  isDiscount: boolean;
  image: ProductImage;
  size: ProductSize;
};

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  description: string;
  productOrder: ProductOrder;
  quantity: number;
};

export type CartType = {
  id: string;
  totalPrice: ProductPrice;
  discountPrice: ProductPrice;
  delivery: DeliveryType;
  products: Array<CartItem>;
  totalPriceAfterApplyPromotion: ProductPrice;
  promotions: PromotionsType[];
  totalPriceFinally: ProductPrice;
};

export type ProductAddToCart = {
  productId: string;
  sizeId: string;
  colorId: string;
  quantity: number;
};

export type CartState = {
  cart: CartType;
  items: Array<CartItem>;
  testValue: number;
};
