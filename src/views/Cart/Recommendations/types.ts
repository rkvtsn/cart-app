import { Purchase } from 'domains/Purchase';
import { Product } from 'domains/Product';

export interface RecommendationsProps {
  recommended: Product[];
  onChangePurchases: (purchases: Purchase[]) => void;
}
