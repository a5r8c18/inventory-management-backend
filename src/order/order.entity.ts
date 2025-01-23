import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Customer } from 'src/customer/customer.entity';

@Entity()
export class Order {
@PrimaryGeneratedColumn()
id: number;

@Column()
quantity: number;

@Column()
totalAmount: number;

@CreateDateColumn({ type: 'timestamp' })
date: Date;

@ManyToOne(() => Product, product => product.orders)
product: Product;

@ManyToOne(() => Customer, customer => customer.orders)
customer: Customer;
}