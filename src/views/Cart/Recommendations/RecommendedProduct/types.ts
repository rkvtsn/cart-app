import { Product } from 'domains/Product';

export interface RecommendedProductProps extends Product {
  onAdd: (product: Product) => void;
}
