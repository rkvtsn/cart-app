import { Product } from 'domains/Product';
import { Purchase } from 'domains/Purchase';

export interface CartProps {
  purchases: Purchase[];
  recommended: Product[];
  onChangePurchases: (purchases: Purchase[]) => void;
}
