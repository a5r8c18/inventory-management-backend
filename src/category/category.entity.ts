import { Brand } from 'src/brand/entities/brand.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/product/product.entity';


@Entity('categories')
export class Category {
@PrimaryGeneratedColumn()
id: number;

@Column({ nullable: false })
name: string;

@Column({ default: 'active' })
status: string;

@OneToMany(() => Brand, brand => brand.categories) brands: Brand[];


@OneToMany(()=> Product, product => product.category)
products: Product[];
}
