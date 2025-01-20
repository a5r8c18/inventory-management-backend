import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

@Entity()
export class Purchase {
@PrimaryGeneratedColumn()
id: number;

@Column()
purchaseDate: Date;

@Column('decimal')
totalAmount: number;

@ManyToOne(() => Product, product => product.purchases)
product: Product;


@ManyToOne(() => Supplier, supplier => supplier.purchases)
supplier: Supplier;

}