import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/category/category.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';
import { Purchase } from 'src/purchase/purchase.entity';
import { Order } from 'src/order/order.entity';

@Injectable()
export class InventoryService {
constructor(
@InjectRepository(Category)
private categoryRepository: Repository<Category>,
@InjectRepository(Brand)
private brandRepository: Repository<Brand>,
@InjectRepository(Product)
private productRepository: Repository<Product>,
@InjectRepository(Supplier)
private supplierRepository: Repository<Supplier>,
@InjectRepository(Purchase)
private purchaseRepository: Repository<Purchase>,
@InjectRepository(Order)
private orderRepository: Repository<Order>,
) {}

// Métodos para Category
findAllCategories(): Promise<Category[]> {
return this.categoryRepository.find();
}

createCategory(category: Category): Promise<Category> {
return this.categoryRepository.save(category);
}

// Métodos para Brand
findAllBrands(): Promise<Brand[]> {
return this.brandRepository.find();
}

createBrand(brand: Brand): Promise<Brand> {
return this.brandRepository.save(brand);
}

// Métodos para Product
async findAllProducts(): Promise<any[]> {
const products = await this.productRepository.find({ relations: ['category', 'brand', 'supplier'] });
const purchases = await this.purchaseRepository.find({ relations: ['product'] });
const orders = await this.orderRepository.find({ relations: ['product'] });

return products.map(product => {
const receivedInventory = purchases
.filter(purchase => purchase.product.id === product.id)
.reduce((sum, purchase) => sum + purchase.quantity, 0);

const sentInventory = orders
.filter(order => order.product.id === product.id)
.reduce((sum, order) => sum + order.quantity, 0);

const availableInventory = product.quantity + receivedInventory - sentInventory;

return {
...product,
receivedInventory,
sentInventory,
availableInventory,
};
});
}

createProduct(product: Product): Promise<Product> {
return this.productRepository.save(product);
}

// Métodos para Supplier
findAllSuppliers(): Promise<Supplier[]> {
return this.supplierRepository.find();
}

createSupplier(supplier: Supplier): Promise<Supplier> {
return this.supplierRepository.save(supplier);
}
}