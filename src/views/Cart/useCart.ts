import { useCallback } from 'react';
import { Product } from 'domains/Product';
import { Purchase } from 'domains/Purchase';
import { findLastIdPurchase, findOldPurchase } from './utils';

interface UseCartProps {
  purchases: Purchase[];
  onChangePurchases: (purchases: Purchase[]) => void;
}

interface UseCartResults {
  onChangePurchase: (purchase: Purchase) => void;
  onDeletePurchase: (product: Purchase) => void;
  onAddProduct: (product: Product) => void;
  onChangeDiscount: (coupon: string) => void;
}

const useCart = ({
  purchases,
  onChangePurchases,
}: UseCartProps): UseCartResults => {
  const onChangePurchase = useCallback(
    ({ count, id: purchaseId }) => {
      const purchaseIndex = purchases.findIndex(({ id }) => id === purchaseId);
      if (purchaseIndex < 0) return;
      const purchasesChanged = [...purchases];
      purchasesChanged[purchaseIndex] = {
        ...purchasesChanged[purchaseIndex],
        count: count || 0,
      };
      onChangePurchases(purchasesChanged);
    },
    [onChangePurchases, purchases]
  );

  const onDeletePurchase = useCallback(
    ({ id: purchaseId }) => {
      console.log({ purchases, purchaseId });
      onChangePurchases(purchases.filter(({ id }) => id !== purchaseId));
    },
    [onChangePurchases, purchases]
  );

  const onAddProduct = useCallback(
    (addedProduct) => {
      const oldPurchase = findOldPurchase(purchases, addedProduct);
      if (oldPurchase) {
        const updatedPurchase = { ...oldPurchase };
        updatedPurchase.count = updatedPurchase.count + 1;
        onChangePurchase(updatedPurchase);
      } else {
        onChangePurchases([
          ...purchases,
          {
            id: findLastIdPurchase(purchases) + 1,
            product: { ...addedProduct },
            count: 1,
          },
        ]);
      }
    },
    [purchases, onChangePurchases, onChangePurchase]
  );

  const onChangeDiscount = useCallback((coupon) => {}, []);

  return {
    onChangePurchase,
    onDeletePurchase,
    onAddProduct,
    onChangeDiscount,
  };
};

export default useCart;
