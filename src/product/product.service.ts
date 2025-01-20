import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
constructor(
@InjectRepository(Product)
private productsRepository: Repository<Product>,
) {}

findAll(): Promise<Product[]> {
return this.productsRepository.find();
}

findOne(id: number): Promise<Product> {
return this.productsRepository.findOneBy({ id });
}

async create(product: Product): Promise<Product> {
    // Manejo de valores nulos o vacíos
    product.quantity = product.quantity || 0; // Asigna 0 si quantity está vacío
    product.base_price = product.base_price || 0; // Asigna 0 si base_price está vacío
    product.tax = product.tax || 0; // Asigna 0 si tax está vacío
    
    // Depuración y logging
    console.log('Product data:', product);
    
    return this.productsRepository.save(product);
    }

    async update(id: number, product: Product): Promise<Product> {
        // Manejo de valores nulos o vacíos
        product.quantity = product.quantity || 0; // Asigna 0 si quantity está vacío
        product.base_price = product.base_price || 0; // Asigna 0 si base_price está vacío
        product.tax = product.tax || 0; // Asigna 0 si tax está vacío
        
        // Depuración y logging
        console.log('Product data:', product);
        
        await this.productsRepository.update(id, product);
        return this.productsRepository.findOneBy({ id });
        }

async remove(id: number): Promise<void> {
await this.productsRepository.delete(id);
}
}