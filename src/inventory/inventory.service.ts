import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/category/category.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

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
) {}

// Category methods
findAllCategories(): Promise<Category[]> {
return this.categoryRepository.find();
}

createCategory(category: Category): Promise<Category> {
return this.categoryRepository.save(category);
}

// Brand methods
findAllBrands(): Promise<Brand[]> {
return this.brandRepository.find();
}

createBrand(brand: Brand): Promise<Brand> {
return this.brandRepository.save(brand);
}

// Product methods
findAllProducts(): Promise<Product[]> {
return this.productRepository.find({ relations: ['category', 'brand', 'supplier'] });
}

createProduct(product: Product): Promise<Product> {
return this.productRepository.save(product);
}

// Supplier methods
findAllSuppliers(): Promise<Supplier[]> {
return this.supplierRepository.find();
}

createSupplier(supplier: Supplier): Promise<Supplier> {
return this.supplierRepository.save(supplier);
}
}