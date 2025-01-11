import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
constructor(private readonly customerService: CustomerService) {}

@Get()
findAll(): Promise<Customer[]> {
return this.customerService.findAll();
}

@Post()
create(@Body() customer: Customer): Promise<Customer> {
return this.customerService.create(customer);
}

@Put(':id')
update(@Param('id') id: number, @Body() customer: Customer): Promise<Customer> {
return this.customerService.update(id, customer);
}

@Delete(':id')
remove(@Param('id') id: number): Promise<void> {
return this.customerService.remove(id);
}
}