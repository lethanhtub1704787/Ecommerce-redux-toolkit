import {ProductParams} from '@/Components/ProductItems/types';
import {Images} from '@/Themes/Images';

// const product_1 = Images.product_detail;
const product_1 = Images.product_black;
const product_2 = Images.sample2;
const product_3 = Images.sample3;
const product_4 = Images.sample4;
const product_5 = Images.sample5;
const product_6 = Images.sample6;

export const PRODUCT_DATA: ProductParams[] = [
  {
    id: 1,
    productName: 'Product 1',
    productPrice: 5000,
    image: product_1,
    isFavorite: true,
    description:
      'A Henley shirt is a collarless pullover shirt, by a round neckline and a placket about 3 to 5 inches (8 to 13 cm) long and usually having 2–5 buttons.',
  },
  {
    id: 2,
    productName: 'Product 2',
    productPrice: 5000,
    image: product_2,
    description: 'product 2',
  },
  {
    id: 3,
    productName: 'Product 3',
    productPrice: 5000,
    image: product_3,
    description: 'product 3',
  },
  {
    id: 4,
    productName: 'Product 4',
    productPrice: 5000,
    image: product_4,
    isFavorite: true,
    description: 'product 4',
  },
  {
    id: 5,
    productName: 'Product 5',
    productPrice: 5000,
    image: product_5,
    description: 'product 5',
  },
  {
    id: 6,
    productName: 'Product 6',
    productPrice: 5000,
    image: product_6,
    description: 'product 6',
  },
];
