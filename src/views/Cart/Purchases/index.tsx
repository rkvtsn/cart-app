import PurchaseItem from './Purchase';
import { PurchasesProps } from './types';
import './styles.scss';

const Purchases = ({
  purchases,
  onDeletePurchase,
  onChangePurchase,
}: PurchasesProps) => {
  return (
    <div className="purchases">
      {purchases.map((purchase) => (
        <PurchaseItem
          key={purchase.id}
          {...purchase}
          onDeletePurchase={onDeletePurchase}
          onUpdatePurchase={onChangePurchase}
        />
      ))}
    </div>
  );
};

export default Purchases;
