import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { Product } from '../product/product.entity';
import { Customer } from '../customer/customer.entity';

@Module({
imports: [TypeOrmModule.forFeature([Order, Product, Customer])],
providers: [OrderService],
controllers: [OrderController],
})
export class OrderModule {}
