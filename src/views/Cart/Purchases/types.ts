import { Purchase } from 'domains/Purchase';

export interface PurchasesProps {
  purchases: Purchase[];
  onDeletePurchase: (purchase: Purchase) => void;
  onChangePurchase: (purchase: Purchase) => void;
}
