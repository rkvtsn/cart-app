import { useCallback } from 'react';
import { Purchase } from 'domains/Purchase';
import PurchaseItem from './Purchase';
import { PurchasesProps } from './types';
import './styles.scss';

const Purchases = ({ purchases, onChangePurchases }: PurchasesProps) => {
  const handleChangePurchase = useCallback(
    (purchase: Purchase) => {
      const purchaseIndex = purchases.findIndex(({ id }) => id === purchase.id);
      const purchasesChanged = [...purchases];
      purchasesChanged[purchaseIndex] = {
        ...purchasesChanged[purchaseIndex],
        count: purchase.count || 0,
      };
      onChangePurchases(purchasesChanged);
    },
    [onChangePurchases, purchases]
  );

  const handleDeletePurchase = useCallback(
    (purchaseId: number) => {
      onChangePurchases(purchases.filter(({ id }) => id !== purchaseId));
    },
    [onChangePurchases, purchases]
  );

  return (
    <div className="purchases">
      {purchases.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          {...purchase}
          onDeletePurchase={handleDeletePurchase}
          onUpdatePurchase={handleChangePurchase}
        />
      ))}
    </div>
  );
};

export default Purchases;
