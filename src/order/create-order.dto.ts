import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    product_id: number;


    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    totalAmount: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    customer_id: number;
}