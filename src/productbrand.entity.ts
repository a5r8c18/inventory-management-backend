import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Brand } from 'src/brand/entities/brand.entity';


@Entity()
export class ProductBrand {
@PrimaryGeneratedColumn()
id: number;

@ManyToOne(() => Product, product => product.productBrands)
product: Product;

@ManyToOne(() => Brand, brand => brand.productBrands)
brand: Brand;
}