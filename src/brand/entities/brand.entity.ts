import { Category } from 'src/category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { ProductBrand } from 'src/productbrand.entity';


@Entity('brands')
export class Brand {
@PrimaryGeneratedColumn()
id: number;

@Column()
bname: string;

@Column()
categoryid: number;

@Column()
status: string;

@ManyToOne(() => Category, category => category.brands) categories: Category;

@ManyToOne(()=> Product, product=> product.brand)
products: Product[];

@OneToMany(() => ProductBrand, productBrand => productBrand.brand)
productBrands: ProductBrand[];
}