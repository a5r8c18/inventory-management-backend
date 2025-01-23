import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

@Entity()
export class Purchase {
@PrimaryGeneratedColumn()
id: number;

@Column()
quantity: number;

@CreateDateColumn({ type: 'timestamp' })
purchaseDate: Date;

@Column({ type: 'decimal', nullable: false })
totalAmount: number;

@ManyToOne(() => Product, product => product.purchases)
product: Product;

@ManyToOne(() => Supplier, supplier => supplier.purchases)
supplier: Supplier;
}

