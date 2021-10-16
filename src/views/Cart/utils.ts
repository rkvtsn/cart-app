import { Purchase } from 'domains/Purchase';
import { Product } from 'domains/Product';

export const findOldPurchase = (
  purchases: Purchase[],
  addedProduct: Product
) => {
  return purchases.find(({ product }) => product.id === addedProduct.id);
};

export const findLastIdPurchase = (purchases: Purchase[]) => {
  return Math.max.apply(
    Math,
    purchases.map(({ id }) => id)
  );
};
