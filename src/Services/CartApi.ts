import {appApi} from '@/Api/ApiConfig';
import {ProductAddToCart} from '@/Types/cartType';

export const getCartApi = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.get('/cart');
};

export const addToCartApi = ({
  accessToken,
  product,
}: {
  accessToken: string;
  product: ProductAddToCart;
}) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('/cart/product', product);
};

export const deleteCartItemApi = ({
  accessToken,
  productId,
}: {
  accessToken: string;
  productId: string;
}) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('/cart/product', productId);
};
