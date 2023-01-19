import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderSchema, OrderSchemaDocument } from '../../schemas/order.schema';
import { Model } from 'mongoose';
import { OrderStatusEnum } from '../../common/enum/order.enum';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(OrderSchema.name)
    private orderModel: Model<OrderSchemaDocument>,
  ) {}
  async create(req: any) {
    await this.orderModel.deleteOne({
      user: req.user[0],
      status: OrderStatusEnum.NEW,
    });
    const newOrder = new this.orderModel({ ...req });
    await newOrder.save();
    return newOrder;
  }
}
