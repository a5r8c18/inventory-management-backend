import { Controller, Get, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Category } from 'src/category/category.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

@Controller('api')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // Category endpoints
  @Get('categories')
  findAllCategories(): Promise<Category[]> {
    return this.inventoryService.findAllCategories();
  }

  @Post('categories')
  createCategory(@Body() category: Category): Promise<Category> {
    return this.inventoryService.createCategory(category);
  }

  // Brand endpoints
  @Get('brands')
  findAllBrands(): Promise<Brand[]> {
    return this.inventoryService.findAllBrands();
  }

  @Post('brands')
  createBrand(@Body() brand: Brand): Promise<Brand> {
    return this.inventoryService.createBrand(brand);
  }

  // Product endpoints
  @Get('products')
  findAllProducts(): Promise<any[]> {
    return this.inventoryService.findAllProducts();
  }

  @Post('products')
  createProduct(@Body() product: Product): Promise<Product> {
    return this.inventoryService.createProduct(product);
  }

  // Supplier endpoints
  @Get('suppliers')
  findAllSuppliers(): Promise<Supplier[]> {
    return this.inventoryService.findAllSuppliers();
  }

  @Post('suppliers')
  createSupplier(@Body() supplier: Supplier): Promise<Supplier> {
    return this.inventoryService.createSupplier(supplier);
  }
}