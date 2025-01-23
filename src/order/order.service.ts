import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-order.dto';
import { Product } from 'src/product/product.entity';
import { Customer } from 'src/customer/customer.entity';

@Injectable()
export class OrderService {
constructor(
@InjectRepository(Order)
private orderRepository: Repository<Order>,
@InjectRepository(Product)
private productRepository: Repository<Product>,
@InjectRepository(Customer)
private customerRepository: Repository<Customer>,
) {}

async findAll(productId?: number): Promise<Order[]> {
const query = this.orderRepository.createQueryBuilder('order')
.leftJoinAndSelect('order.product', 'product')
.leftJoinAndSelect('order.customer', 'customer');

if (productId) {
query.where('order.product.id = :productId', { productId });
}

return query.getMany();
}

findOne(id: number): Promise<Order> {
return this.orderRepository.findOne({
where: { id },
relations: ['product', 'customer'],
});
}

async create(createOrderDto: CreateOrderDto): Promise<Order> {
const { product_id, customer_id, ...orderData } = createOrderDto;

const product = await this.productRepository.findOne({ where: { id: product_id } });
if (!product) {
throw new NotFoundException(`Product with ID ${product_id} not found`);
}

const customer = await this.customerRepository.findOne({ where: { id: customer_id } });
if (!customer) {
throw new NotFoundException(`Customer with ID ${customer_id} not found`);
}

const order = this.orderRepository.create({
...orderData,
product,
customer,
});

return this.orderRepository.save(order);
}

async update(id: number, createOrderDto: CreateOrderDto): Promise<Order> {
const { product_id, customer_id, ...orderData } = createOrderDto;

const product = await this.productRepository.findOne({ where: { id: product_id } });
if (!product) {
throw new NotFoundException(`Product with ID ${product_id} not found`);
}

const customer = await this.customerRepository.findOne({ where: { id: customer_id } });
if (!customer) {
throw new NotFoundException(`Customer with ID ${customer_id} not found`);
}

await this.orderRepository.update(id, {
...orderData,
product,
customer,
});

return this.orderRepository.findOne({ where: { id }, relations: ['product', 'customer'] });
}

async remove(id: number): Promise<void> {
await this.orderRepository.delete(id);
}
}