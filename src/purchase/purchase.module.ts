import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { Purchase } from './purchase.entity';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

@Module({
imports: [TypeOrmModule.forFeature([Purchase, Product, Supplier])],
providers: [PurchaseService],
controllers: [PurchaseController],
})
export class PurchaseModule {}