import {ProductParams} from '@/Components/ProductItems/types';
import {SearchItemsParams} from '@/Components/SearchItems/types';
import {Images} from '@/Themes/Images';

const product_1 = Images.sample1;
const product_2 = Images.sample2;
const product_3 = Images.sample3;
const product_4 = Images.sample4;
const product_5 = Images.sample5;
const product_6 = Images.sample6;

export const PRODUCT_DATA: SearchItemsParams[] = [
  {
    id: 1,
    productName: 'Product 1',
    productPrice: 5000,
    image: product_1,
    isFavorite: true,
  },
  {id: 2, productName: 'Product 2', productPrice: 5000, image: product_2},
  {id: 3, productName: 'Product 3', productPrice: 5000, image: product_3},
  {
    id: 4,
    productName: 'Product 4',
    productPrice: 5000,
    image: product_4,
    isFavorite: true,
  },
  {id: 5, productName: 'Product 5', productPrice: 5000, image: product_5},
  {id: 6, productName: 'Product 6', productPrice: 5000, image: product_6},
];
