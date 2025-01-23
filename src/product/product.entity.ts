import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Brand } from 'src/brand/entities/brand.entity';
import { ProductBrand } from 'src/productbrand.entity';
import { Purchase } from 'src/purchase/purchase.entity';
import { Category } from 'src/category/category.entity';
import { Supplier } from 'src/supplier/supplier.entity';
import { Order } from 'src/order/order.entity';

@Entity()
export class Product {
@PrimaryGeneratedColumn()
id: number;

@ManyToOne(() => Category, category => category.products)
category: Category;

@ManyToOne(() => Brand, brand => brand.products)
brand: Brand;

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

@Column('decimal', { default: 0 })
initialInventory: number; // Añade esta propiedad

@ManyToOne(() => Supplier, supplier => supplier.products)
supplier: Supplier;

@OneToMany(() => ProductBrand, productBrand => productBrand.product)
productBrands: ProductBrand[];

@OneToMany(() => Purchase, purchase => purchase.product)
purchases: Purchase[];

@OneToMany(() => Order, order => order.product)
orders: Order[];
}