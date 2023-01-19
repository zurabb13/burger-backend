import { OrderItem } from './orderItem';
import { LatLng } from './latlng';
import { OrderStatusEnum } from '../enum/order.enum';
import { Types } from 'mongoose';

export interface OrderS {
  id: string;
  items: OrderItem[];
  totalPrice: number;
  address: string;
  addressLatLng: LatLng;
  paymentId: string;
  status: OrderStatusEnum;
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
