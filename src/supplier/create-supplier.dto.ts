import { IsNotEmpty } from 'class-validator';

export class CreateSupplierDto{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    mobile:number;

    @IsNotEmpty()
    createdAt:Date;
}