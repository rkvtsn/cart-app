import { Purchase } from 'domains/Purchase';

export interface PurchasesProps {
  purchases: Purchase[];
  onChangePurchases: (purchase: Purchase[]) => void;
}
