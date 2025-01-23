import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.entity';
import { CreatePurchaseDto } from './create-purchase.dto';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  findAll(@Query('productId') productId?: number): Promise<Purchase[]> {
    return this.purchaseService.findAll(productId);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Purchase> {
    return this.purchaseService.findOne(id);
  }

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
    return this.purchaseService.create(createPurchaseDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
    return this.purchaseService.update(id, createPurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.purchaseService.remove(id);
  }
}
