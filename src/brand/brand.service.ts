import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
constructor(
@InjectRepository(Brand)
private readonly brandRepository: Repository<Brand>,
) {}

async findAll(): Promise<Brand[]> {
    console.log('Fetching brands from database'); // Añade este log
    const brands = await this.brandRepository.find();
    console.log('Brands:', brands); // Añade este log
    return brands;
    }

findOne(id: number): Promise<Brand> {
return this.brandRepository.findOne({ where: { id } });
}

create(brand: Brand): Promise<Brand> {
return this.brandRepository.save(brand);
}

async update(id: number, brand: Brand): Promise<Brand> {
await this.brandRepository.update(id, brand);
return this.brandRepository.findOne({ where: { id } });
}

async remove(id: number): Promise<void> {
await this.brandRepository.delete(id);
}
}