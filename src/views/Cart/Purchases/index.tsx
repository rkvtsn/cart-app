import { PurchasesProps } from './types';
import './styles.scss';
import PurchaseItem from './Purchase';
import { Purchase } from 'domains/Purchase';

const Purchases = ({ purchases, onChangePurchases }: PurchasesProps) => {
  const handleChangePurchase = (purchase: Purchase) => {
    const purchaseIndex = purchases.findIndex(({ id }) => id === purchase.id);
    const purchasesChanged = [...purchases];
    purchasesChanged[purchaseIndex] = {
      ...purchasesChanged[purchaseIndex],
      count: purchase.count || 0,
    };
    onChangePurchases(purchasesChanged);
  };

  return (
    <div className="purchases">
      {purchases.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          {...purchase}
          onUpdatePurchase={handleChangePurchase}
        />
      ))}
    </div>
  );
};

export default Purchases;
