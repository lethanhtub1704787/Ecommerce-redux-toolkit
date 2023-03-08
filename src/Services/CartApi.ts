import {appApi} from '@/Api/ApiConfig';
import {ProductAddToCart} from '@/Types/cartType';

/* ###### Temporarily ignore this API call . Using local storage (redux state and async storage Persist) ######*/

// export const getCartApi = (accessToken: string) => {
//   appApi.setHeaders({
//     Authorization: `Bearer ${accessToken}`,
//   });
//   return appApi.get('/cart');
// };

// export const addToCartApi = ({
//   accessToken,
//   product,
// }: {
//   accessToken: string;
//   product: ProductAddToCart;
// }) => {
//   appApi.setHeaders({
//     Authorization: `Bearer ${accessToken}`,
//   });
//   return appApi.post('/cart/product', product);
// };

// export const deleteCartItemApi = (accessToken: string, productId: string) => {
//   appApi.setHeaders({
//     Authorization: `Bearer ${accessToken}`,
//   });
//   return appApi.delete('/cart/product/' + productId);
// };
