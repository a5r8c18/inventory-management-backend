import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
@PrimaryGeneratedColumn()
id: number;

@Column()
category: string;

@Column()
brand: string;

@Column()
name: string;

@Column()
model: string;

@Column()
description: string;

@Column('decimal')
quantity: number;

@Column()
unit: string;

@Column('decimal')
base_price: number;

@Column('decimal')
tax: number;

@Column()
supplier: string;

@Column()
status: string;
}