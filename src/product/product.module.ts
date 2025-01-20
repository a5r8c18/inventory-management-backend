import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { ProductBrand } from 'src/productbrand.entity';
import { Purchase } from 'src/purchase/purchase.entity';


@Module({
imports: [TypeOrmModule.forFeature([Product, Brand, ProductBrand, Purchase])],
providers: [ProductService],
controllers: [ProductController],
})
export class ProductModule {}