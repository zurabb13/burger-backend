import { Product } from '../../schemas/products';

export interface OrderItem {
  food: Product;
  price: number;
  quantity: number;
}
