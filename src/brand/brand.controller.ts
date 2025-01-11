import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';

@Controller('brands')
export class BrandController {
constructor(private readonly brandService: BrandService) {}

@Get()
findAll(): Promise<Brand[]> {
return this.brandService.findAll();
}

@Get(':id')
findOne(@Param('id') id: number): Promise<Brand> {
return this.brandService.findOne(id);
}

@Post()
create(@Body() brand: Brand): Promise<Brand> {
return this.brandService.create(brand);
}

@Put(':id')
update(@Param('id') id: number, @Body() brand: Brand): Promise<Brand> {
return this.brandService.update(id, brand);
}

@Delete(':id')
remove(@Param('id') id: number): Promise<void> {
return this.brandService.remove(id);
}
}