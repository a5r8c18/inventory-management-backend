import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Purchase } from 'src/purchase/purchase.entity';

@Entity('supplier')
export class Supplier {
@PrimaryGeneratedColumn()
id: number;

@Column({ nullable: false })
name: string;

@Column()
address: string;

@Column()
mobile: number;

@CreateDateColumn()
createdAt: Date;

@OneToMany(() => Product, product => product.supplier)
products: Product[];

@OneToMany(() => Purchase, purchase => purchase.supplier)
purchases: Purchase[];
}