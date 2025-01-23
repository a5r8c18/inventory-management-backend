import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './purchase.entity';
import { CreatePurchaseDto } from './create-purchase.dto';
import { Product } from '../product/product.entity';
import { Supplier } from '../supplier/supplier.entity';

@Injectable()
export class PurchaseService {
constructor(
@InjectRepository(Purchase)
private purchaseRepository: Repository<Purchase>,
@InjectRepository(Product)
private productRepository: Repository<Product>,
@InjectRepository(Supplier)
private supplierRepository: Repository<Supplier>,
) {}

async findAll(productId?: number): Promise<Purchase[]> {
    const query = this.purchaseRepository.createQueryBuilder('purchase')
        .leftJoinAndSelect('purchase.product', 'product')
        .leftJoinAndSelect('purchase.supplier', 'supplier');

    if (productId) {
        query.where('purchase.product.id = :productId', { productId });
    }

    return query.getMany();
}

async findOne(id: number): Promise<Purchase> {
return this.purchaseRepository.findOne({ where: { id }, relations: ['product', 'supplier'] });
}

async create(createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
const { product_id, supplier_id, ...purchaseData } = createPurchaseDto;

const product = await this.productRepository.findOne({ where: { id: product_id } });
if (!product) {
throw new NotFoundException(`Product with ID ${product_id} not found`);
}

const supplier = await this.supplierRepository.findOne({ where: { id: supplier_id } });
if (!supplier) {
throw new NotFoundException(`Supplier with ID ${supplier_id} not found`);
}

const purchase = this.purchaseRepository.create({
...purchaseData,
product,
supplier,
});

return this.purchaseRepository.save(purchase);
}

async update(id: number, createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
const { product_id, supplier_id, ...purchaseData } = createPurchaseDto;

const product = await this.productRepository.findOne({ where: { id: product_id } });
if (!product) {
throw new NotFoundException(`Product with ID ${product_id} not found`);
}

const supplier = await this.supplierRepository.findOne({ where: { id: supplier_id } });
if (!supplier) {
throw new NotFoundException(`Supplier with ID ${supplier_id} not found`);
}

await this.purchaseRepository.update(id, {
...purchaseData,
product,
supplier,
});

return this.purchaseRepository.findOne({ where: { id }, relations: ['product', 'supplier'] });
}

async remove(id: number): Promise<void> {
await this.purchaseRepository.delete(id);
}
}