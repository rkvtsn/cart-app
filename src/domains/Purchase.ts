import { Product } from './Product';

export interface Purchase {
  id: number;
  count: number;
  product: Product;
}
