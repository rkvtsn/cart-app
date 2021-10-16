import { Product } from 'domains/Product';

export interface RecommendationsProps {
  recommended: Product[];
  onAddToCart: (product: Product) => void;
}
