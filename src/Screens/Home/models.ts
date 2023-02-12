import {ProductParams} from '@/Components/ProductItems/types';
import {Images} from '@/Themes/Images';
import {Category} from '@/Components/ProductCategory/types';

const dress = Images.Dress_1x;
const shirt = Images.Shirt_1x;
const pants = Images.Pants_1x;
const tshirt = Images.Tshirt_1x;

export const PRODUCT_TYPE: Category[] = [
  {
    id: 1,
    image: dress,
    typeName: 'Dress',
  },
  {
    id: 2,
    image: shirt,
    typeName: 'Shirt',
  },
  {
    id: 3,
    image: pants,
    typeName: 'Pants',
  },
  {
    id: 4,
    image: tshirt,
    typeName: 'T-shirt',
  },
];

const product_1 = Images.sample1;
const product_2 = Images.sample2;
const product_3 = Images.sample3;
const product_4 = Images.sample4;
const product_5 = Images.sample5;
const product_6 = Images.sample6;

export const PRODUCT_DATA: ProductParams[] = [
  {id: 1, productName: 'Product 1', productPrice: 5000, image: product_1},
  {id: 2, productName: 'Product 2', productPrice: 5000, image: product_2},
  {id: 3, productName: 'Product 3', productPrice: 5000, image: product_3},
  {id: 4, productName: 'Product 4', productPrice: 5000, image: product_4},
  {id: 5, productName: 'Product 5', productPrice: 5000, image: product_5},
  {id: 6, productName: 'Product 6', productPrice: 5000, image: product_6},
];
