import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Category } from 'src/category/category.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

@Module({
imports: [TypeOrmModule.forFeature([Category, Brand, Product, Supplier])],
providers: [InventoryService],
controllers: [InventoryController],
})
export class InventoryModule {}