import {
  ProductImage,
  ProductItemType,
  ProductPrice,
  ProductSize,
} from './productType';

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

export type CartState = {
  CartItems: Array<CartItem>;
};

export type UpdateQuantity = {
  cartItemID: string;
  value: number;
};

export type CartItemID = {
  productItem: ProductItemType;
  colorId: string;
  sizeId: string;
};

export type DeleteCartItem = {
  accessToken: string;
  productId: string;
};
