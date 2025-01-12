import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
constructor(
@InjectRepository(Category)
private categoriesRepository: Repository<Category>,
) {}

findAll(): Promise<Category[]> {
return this.categoriesRepository.find({ relations: ['brands'] });
}

findOne(id: number): Promise<Category> {
return this.categoriesRepository.findOneBy({ id });
}

create(category: Category): Promise<Category> {
return this.categoriesRepository.save(category);
}

async update(id: number, category: Category): Promise<void> {
await this.categoriesRepository.update(id, category);
}

async remove(id: number): Promise<void> {
await this.categoriesRepository.delete(id);
}
}