import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
constructor(private readonly categoriesService: CategoriesService) {}

@Get()
findAll(): Promise<Category[]> {
return this.categoriesService.findAll();
}

@Get(':id')
findOne(@Param('id') id: number): Promise<Category> {
return this.categoriesService.findOne(id);
}

@Post()
create(@Body() category: Category): Promise<Category> {
return this.categoriesService.create(category);
}

@Put(':id')
update(@Param('id') id: number, @Body() category: Category): Promise<void> {
return this.categoriesService.update(id, category);
}

@Delete(':id')
remove(@Param('id') id: number): Promise<void> {
return this.categoriesService.remove(id);
}
}
