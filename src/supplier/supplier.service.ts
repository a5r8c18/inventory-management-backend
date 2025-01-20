import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';


@Injectable()
export class SupplierService {
constructor(
@InjectRepository(Supplier)
private supplierRepository: Repository<Supplier>,
) {}

findAll(): Promise<Supplier[]> {
return this.supplierRepository.find();
}

findOne(id: number): Promise<Supplier> {
return this.supplierRepository.findOneBy({ id });
}

async update(id: number, supplier: Supplier): Promise<void> {
await this.supplierRepository.update(id, supplier);
}

async remove(id: number): Promise<void> {
await this.supplierRepository.delete(id);
}

 create(supplier:Supplier): Promise<Supplier> {
    return this.supplierRepository.save(supplier);
}
}
