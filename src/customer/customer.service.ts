import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
constructor(
@InjectRepository(Customer)
private readonly customerRepository: Repository<Customer>,
) {}

async findAll(): Promise<Customer[]> {
    console.log('Fetching customers from database'); // Añade este log
    const customers = await this.customerRepository.find();
    console.log('Customers:', customers); // Añade este log
    return customers;
}

create(customer: Customer): Promise<Customer> {
return this.customerRepository.save(customer);
}

async update(id: number, customer: Customer): Promise<Customer> {
await this.customerRepository.update(id, customer);
return this.customerRepository.findOne({ where: { id } });
}

async remove(id: number): Promise<void> {
await this.customerRepository.delete(id);
}
}