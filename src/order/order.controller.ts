import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-order.dto';

@Controller('orders')
export class OrderController {
constructor(private readonly orderService: OrderService) {}

@Get()
findAll(@Query('productId') productId?: number): Promise<Order[]> {
    return this.orderService.findAll(productId);
}

@Get(':id')
findOne(@Param('id') id: number): Promise<Order> {
return this.orderService.findOne(id);
}

@Post()
create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
return this.orderService.create(createOrderDto);
}

@Put(':id')
update(@Param('id') id: number, @Body() createOrderDto: CreateOrderDto): Promise<Order> {
return this.orderService.update(id, createOrderDto);
}

@Delete(':id')
remove(@Param('id') id: number): Promise<void> {
return this.orderService.remove(id);
}
}