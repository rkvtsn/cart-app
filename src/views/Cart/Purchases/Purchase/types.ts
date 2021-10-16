import { Purchase } from 'domains/Purchase';

export interface PurchaseProps extends Purchase {
  onUpdatePurchase: (purchase: Purchase) => void;
}
