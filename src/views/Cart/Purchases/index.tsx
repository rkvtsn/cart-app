import { PurchasesProps } from './types';
import './styles.scss';
import PurchaseItem from './Purchase';

const Purchases = ({ purchases, onChangePurchases }: PurchasesProps) => {
  const handleChangePurchase = () => {};

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
