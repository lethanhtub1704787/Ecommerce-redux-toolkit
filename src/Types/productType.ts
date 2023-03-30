import {Category} from './categoryType';

export type ProductSize = {
  quantity: number;
  sizeId: string;
  sizeName: string;
};

export type ProductRate = {
  value: number;
  total: number;
};

export type ProductImage = {
  id: string;
  originalName: string;
  resizedUrl: string;
  url: string;
};

export type ProductPrice = {
  currency: string;
  value: number;
};

export type ProductRepresent = {
  colorId: string;
  colorName: string;
  value: string;
  image: ProductImage;
  defaultPrice: ProductPrice;
  initPrice: ProductPrice;
  isDiscount: boolean;
  isRepresent: boolean;
  sizes: Array<ProductSize>;
};

export type ProductItemType = {
  id: string;
  name: string;
  description: string;
  isDisplay: boolean;
  categoryIds: Array<string>;
  type: string;
  createAt: number;
  productRepresent: ProductRepresent;
  productsVariant: Array<ProductRepresent>;
  rate: ProductRate;
  isFavorite: boolean;
  aspectRatio: number;
  widthRatio: number;
  isDelete: boolean;
};

export type ProductDataState = {
  items: Array<ProductItemType>;
  category: Array<Category>;
  favourites: Array<string>;
  productByCategory: Array<ProductItemType>;
};
