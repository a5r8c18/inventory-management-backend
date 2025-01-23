import { Order } from 'src/order/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Customer {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
address: string;

@Column()
mobile: string;

@Column()
balance: number;

@OneToMany(() => Order, order => order.customer)
orders: Order[];
}